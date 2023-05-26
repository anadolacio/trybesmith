export type ServiceResponseErrorType = 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA';
export type ServiceResponseSuccessType = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: {
    message: string
  }
};

export type ServiceResponseSuccess<Type> = {
  status: ServiceResponseSuccessType,
  data: Type
};

export type ServiceResponse<Type> = ServiceResponseSuccess<Type> | ServiceResponseError;