FROM node:14.15.4-slim

# user

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null"]