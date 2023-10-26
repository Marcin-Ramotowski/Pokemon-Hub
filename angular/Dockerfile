FROM --platform=$BUILDPLATFORM node:18-alpine as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ng serve --host 0.0.0.0 --disable-host-check

FROM builder as dev-envs

RUN <<EOF
apk update
apk add --no-cache git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ng serve --host 0.0.0.0 --disable-host-check
