export type ServiceResponseErrorType = 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA' | 
'INCOMPLETE_DATA';
export type ServiceResponseSuccessType = 'SUCCESS' | 'CREATED';

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