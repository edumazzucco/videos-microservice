FROM node:14.15.4-slim

# user

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "yarn && tail -f /dev/null" ]