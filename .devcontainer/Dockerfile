ARG VARIANT="16"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive
RUN apt-get install curl
RUN sudo -u node npm install -g yarn pnpm
