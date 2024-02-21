interface NextEnv {
  DEBUG_MODE_ENABLED: boolean;
  METRIKA_DISABLED: boolean;
  CANONICAL_URL?: string;
}

/**
 * Hook for handling .env data.
 */
export const useEnv = (): NextEnv => {
  const stringToBoolean = (variable?: string) => {
    if (typeof variable === 'undefined') {
      return false;
    }

    return variable === 'true';
  };

  return {
    DEBUG_MODE_ENABLED: stringToBoolean(process.env.DEBUG_MODE_ENABLED),
    METRIKA_DISABLED: stringToBoolean(process.env.METRIKA_DISABLED),
    CANONICAL_URL: process.env.CANONICAL_URL,
  };
};
