// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

use crate::buffer::ScalarBuffer;
use crate::{ArrowNativeType, MutableBuffer};
use std::ops::Deref;

/// A non-empty buffer of monotonically increasing, positive integers
#[derive(Debug, Clone)]
pub struct OffsetBuffer<O: ArrowNativeType>(ScalarBuffer<O>);

impl<O: ArrowNativeType> OffsetBuffer<O> {
    /// Create a new [`OffsetBuffer`] from the provided [`ScalarBuffer`]
    ///
    /// # Panics
    ///
    /// Panics if `buffer` is not a non-empty buffer containing
    /// monotonically increasing values greater than or equal to zero
    pub fn new(buffer: ScalarBuffer<O>) -> Self {
        assert!(!buffer.is_empty(), "offsets cannot be empty");
        assert!(
            buffer[0] >= O::usize_as(0),
            "offsets must be greater than 0"
        );
        assert!(
            buffer.windows(2).all(|w| w[0] <= w[1]),
            "offsets must be monotonically increasing"
        );
        Self(buffer)
    }

    /// Create a new [`OffsetBuffer`] from the provided [`ScalarBuffer`]
    ///
    /// # Safety
    ///
    /// `buffer` must be a non-empty buffer containing monotonically increasing
    /// values greater than or equal to zero
    pub unsafe fn new_unchecked(buffer: ScalarBuffer<O>) -> Self {
        Self(buffer)
    }

    /// Create a new [`OffsetBuffer`] containing a single 0 value
    pub fn new_empty() -> Self {
        let buffer = MutableBuffer::from_len_zeroed(std::mem::size_of::<O>());
        Self(buffer.into_buffer().into())
    }

    /// Create a new [`OffsetBuffer`] containing `len + 1` `0` values
    pub fn new_zeroed(len: usize) -> Self {
        let len_bytes = len
            .checked_add(1)
            .and_then(|o| o.checked_mul(std::mem::size_of::<O>()))
            .expect("overflow");
        let buffer = MutableBuffer::from_len_zeroed(len_bytes);
        Self(buffer.into_buffer().into())
    }

    /// Create a new [`OffsetBuffer`] from the iterator of slice lengths
    ///
    /// ```
    /// # use arrow_buffer::OffsetBuffer;
    /// let offsets = OffsetBuffer::<i32>::from_lengths([1, 3, 5]);
    /// assert_eq!(offsets.as_ref(), &[0, 1, 4, 9]);
    /// ```
    ///
    /// # Panics
    ///
    /// Panics on overflow
    pub fn from_lengths<I>(lengths: I) -> Self
    where
        I: IntoIterator<Item = usize>,
    {
        let iter = lengths.into_iter();
        let mut out = Vec::with_capacity(iter.size_hint().0 + 1);
        out.push(O::usize_as(0));

        let mut acc = 0_usize;
        for length in iter {
            acc = acc.checked_add(length).expect("usize overflow");
            out.push(O::usize_as(acc))
        }
        // Check for overflow
        O::from_usize(acc).expect("offset overflow");
        Self(out.into())
    }

    /// Returns the inner [`ScalarBuffer`]
    pub fn inner(&self) -> &ScalarBuffer<O> {
        &self.0
    }

    /// Returns the inner [`ScalarBuffer`], consuming self
    pub fn into_inner(self) -> ScalarBuffer<O> {
        self.0
    }

    /// Returns a zero-copy slice of this buffer with length `len` and starting at `offset`
    pub fn slice(&self, offset: usize, len: usize) -> Self {
        Self(self.0.slice(offset, len.saturating_add(1)))
    }
}

impl<T: ArrowNativeType> Deref for OffsetBuffer<T> {
    type Target = [T];

    #[inline]
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl<T: ArrowNativeType> AsRef<[T]> for OffsetBuffer<T> {
    #[inline]
    fn as_ref(&self) -> &[T] {
        self
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic(expected = "offsets cannot be empty")]
    fn empty_offsets() {
        OffsetBuffer::new(Vec::<i32>::new().into());
    }

    #[test]
    #[should_panic(expected = "offsets must be greater than 0")]
    fn negative_offsets() {
        OffsetBuffer::new(vec![-1, 0, 1].into());
    }

    #[test]
    fn offsets() {
        OffsetBuffer::new(vec![0, 1, 2, 3].into());

        let offsets = OffsetBuffer::<i32>::new_zeroed(3);
        assert_eq!(offsets.as_ref(), &[0; 4]);

        let offsets = OffsetBuffer::<i32>::new_zeroed(0);
        assert_eq!(offsets.as_ref(), &[0; 1]);
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn offsets_new_zeroed_overflow() {
        OffsetBuffer::<i32>::new_zeroed(usize::MAX);
    }

    #[test]
    #[should_panic(expected = "offsets must be monotonically increasing")]
    fn non_monotonic_offsets() {
        OffsetBuffer::new(vec![1, 2, 0].into());
    }

    #[test]
    fn from_lengths() {
        let buffer = OffsetBuffer::<i32>::from_lengths([2, 6, 3, 7, 2]);
        assert_eq!(buffer.as_ref(), &[0, 2, 8, 11, 18, 20]);

        let half_max = i32::MAX / 2;
        let buffer =
            OffsetBuffer::<i32>::from_lengths([half_max as usize, half_max as usize]);
        assert_eq!(buffer.as_ref(), &[0, half_max, half_max * 2]);
    }

    #[test]
    #[should_panic(expected = "offset overflow")]
    fn from_lengths_offset_overflow() {
        OffsetBuffer::<i32>::from_lengths([i32::MAX as usize, 1]);
    }

    #[test]
    #[should_panic(expected = "usize overflow")]
    fn from_lengths_usize_overflow() {
        OffsetBuffer::<i32>::from_lengths([usize::MAX, 1]);
    }
}