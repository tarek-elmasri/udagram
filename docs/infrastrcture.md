# Infrastructure description

udagram application uses 3 separated AWS services and connected to each other.

1- `udagram-api`: uses `Elastic Beanstalk (EB)` environment.

2- `Postgres database`: uses `RDS` service and publicably accessable.

3- `udagram-frontend`: use `S3` service to host static frontend files.

### Infrastructure Archeticture Diagram:

![infrastructure diagram](https://github.com/tarek/udagram/docs/infrastructure.png?raw=true)
