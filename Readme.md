# GraphQL Timezone

Timezone scalar type for GraphQL.js.

Ex: `Europe/Prague`

## Usage

This package exports a Timezone scalar GraphQL.js type and list of available timezones as array of strings and as enum as well:

```
import timezoneScalar, { timezones, Timezone } from 'graphql-timezone';

// Generate Timezone scalar
const Timezone = timezoneScalar();

// Generate Timezone with custom name and custom description
const CustomTimezone = timezoneScalar({
  name: 'CustomTimezone',
  description: 'Description of Custom Timezone scalar.'
});

// Get list of avaliable timezones
const listOfAvailableTimezones: string[] = timezones;

// Use Enum of generated timezones
const newTimezone = Timezone.EuropePrague // Points to "Europe/Prague"
```

## Dependency

To list and validate the timezone, this library uses [MomentTimezone](https://momentjs.com/timezone/docs/).
