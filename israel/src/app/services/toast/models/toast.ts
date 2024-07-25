export enum toastType {
  'ERROR' = 'error',
  'SUCCESS' = 'success',
  'INFO' = 'info'
}

export type Toast = {
  type: toastType
  message: string
}
