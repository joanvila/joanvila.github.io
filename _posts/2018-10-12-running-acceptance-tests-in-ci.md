---
layout: post
title: "Running acceptance tests in the CI pipeline. A painless love story"
description: "[4 minutes] &nbsp; Enabling running end to end tests in the CI pipeline for continuous deployment"
date: 2018-10-12
tags: [nodejs, testing, continuous integration, continuous deployment]
comments: true
share: true
---


As responsible developers, it is our duty to test our services with acceptance tests to simulate real traffic.
Even though we all have this clear, there are times and environments where bringing this to reality becomes a pain.

Some constrains usually are:

- The need to set up the environment before running the tests.
- Accessing external services that are not available in some places where the tests run. For example in the CI pipeline.
- Querying other services that require secrets authentication that are not available.
- For continuous deployment environments, adding the constrain of the external services being up and running in order to deploy our service.
- Flake tests

# Status quo

---

For all this reasons, when looking into the acceptance tests setup for a lot of micro-services, plenty of flavours are found.
From not having those tests at all, to having them running both in local and in the pipeline making our CI fail in a non-deterministic way,
passing by tests that were built and run once but never again because they don’t run in an automatic way.

# Ideal situation

---

If for one moment we forget about what we just read and we think about how success looks like, several things come to our mind:

- The acceptance tests are run both in local and in the CI pipeline in a transparent way. Using `npm test` if we’re talking about a NodeJS project.
- If we are in a continuous deployment environment, the fact of having a service down that ours depend on, is not a blocker to deploy our service.
- The CI pipeline doesn’t fail because of flaky acceptance tests.

# The good news

---

The ideal situation you are looking for is possible! 🎉 

When the acceptance tests are run in local, they will query the real external services.
During this run, the responses of all the external http calls will be stored in a fixture file.
This way we achieve running the tests against the real service that ours depend on, simulating real traffic.

When the tests are run in the CI pipeline, instead of querying the external services, those will use the mocked responses stored in the commited fixture file. 
What we achieve with this is not blocking the deployment of the service because another one is down and the tests are not flaky because the test already passed in local.

This process will be almost transparent for the developers but it works under the assumption that the maintainers of the service run all the tests before pushing.

## Tell me how

If you own a NodeJS service this is your lucky day. There is an npm package that does the magic for you:

Repo: https://github.com/joanvila/nock-back-ci
Npm package: https://www.npmjs.com/package/nock-back-ci

Although there are some bits and pieces missing, the package is fully usable and it’s already being used to test some micro-services at Skyscanner.

