import uuid from 'react-native-uuid';

const generateEventHash = (eventName: string) => {
  return `${eventName}_${uuid.v4()}`;
};

export { generateEventHash };
