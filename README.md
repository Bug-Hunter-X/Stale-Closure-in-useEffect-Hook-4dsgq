# Stale Closure Bug in React useEffect

This repository demonstrates a common error in React's `useEffect` hook: using a stale closure.  The `useEffect` hook is used to perform side effects, but if dependencies are not correctly declared, the closure will use outdated values, causing unexpected behavior.

## Problem
The `increment` function uses the `count` state variable.  However, without `count` in the dependency array, the closure within `useEffect` continues to reference the initial value of `count`, even after it is updated.  This leads to incorrect logging in the console.

## Solution
The solution involves correctly specifying the `count` variable as a dependency in the `useEffect` hook's dependency array. This ensures that the effect runs whenever the `count` value changes.

## How to reproduce
1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Observe the console output; It will print the initial value of count repeatedly because of the missing dependency in the useEffect. Observe it after the solution is applied, it will print the updated value.
