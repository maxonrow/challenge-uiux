# UI/UX

## Problem Statement

- There are many data representations of the current pandemic. How do we present a holistic multi-dimensional dashboard with unique features that are not being used right now and are powered by blockchain technology?

## Potential Solution

- A customizable self-serve analytics solution to help visualization of daily pandamic situation
- A self-service analytics dashboards that help to uncover hidden insights and help decisions be data driven.

## Sample Solution

### Step 1 - Checkout directory

- Go to path `cd src/`

### Step 2 - Build docker image

To build docker image, run `docker build . --tag uiux`

### Step 3 - Run docker container

To start the container, run `docker run -it -p 8080:8080 --name uiux -d uiux`

### Step 4 - Expected output

![Alt text](src/plot.png?raw=true "Sample UIUX Output")