export type ApiError = {
  code: string
  msg: string
}

export const error = {
  /** Wrong request data format */
  REQ_000: {
    code: 'REQ_000',
    msg: 'Wrong request data format',
  },
  /** Unauthorized */
  AUTH_000: {
    code: 'AUTH_000',
    msg: 'Unauthorized',
  },
  /** Already joined email */
  AUTH_001: {
    code: 'AUTH_001',
    msg: 'Already joined email',
  },
  /** Not in the pending list */
  AUTH_002: {
    code: 'AUTH_002',
    msg: 'Not in the pending list',
  },
  /** Wrong magic key */
  AUTH_003: {
    code: 'AUTH_003',
    msg: 'Wrong magic key',
  },
  /** Wrong email format */
  AUTH_004: {
    code: 'AUTH_004',
    msg: 'Wrong email format',
  },
  /** Unregistered email */
  AUTH_005: {
    code: 'AUTH_005',
    msg: 'Unregistered email',
  },
  /** Article not found */
  ARTICLE_000: {
    code: 'ARTICLE_001',
    msg: 'Article not found',
  },
}
