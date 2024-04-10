import uuid from 'react-native-uuid';

const generateEventId = (eventName: string) => {
  return `${eventName}_${uuid.v4()}`;
};

export { generateEventId };
