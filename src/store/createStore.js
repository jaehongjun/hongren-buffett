export const createActionTypes = (TYPE) => {
  return {
    INDEX: TYPE,
    REQUESTED: `${TYPE}_REQUESTED`,
    SUCCEEDED: `${TYPE}_SUCCEEDED`,
    FAILED: `${TYPE}_FAILED`,
  };
};

export const createActions = (TYPE) => {
  return {
    INDEX: (payload) => {
      return { type: TYPE, payload };
    },
    REQUESTED: (payload) => {
      return { type: TYPE, payload };
    },
    SUCCEEDED: (payload) => {
      return { type: TYPE, payload };
    },
    FAILED: (payload) => {
      return { type: TYPE, payload };
    },
  };
};
