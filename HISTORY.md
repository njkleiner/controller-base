# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Make action methods asynchronous to allow easy `async`/`await` usage.
- The `configure` method now returns the router object it was given as an argument.

## [1.0.1] - 2019-04-24

### Fixed
- Register "form actions" first to avoid conflicts between the `/:id` and `/new` routes.
