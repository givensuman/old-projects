#!/usr/bin/env node
import { facts } from './facts.js'
const random = array => array[Math.floor(Math.random() * array.length)]
console.log(
    "\x1b[36m", 
    '🤯 ' + random(facts)
)