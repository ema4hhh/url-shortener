export interface DataBaseUrlSchema {
  long_url: string,
  short_url: string,
}

export interface DataBaseSchema extends DataBaseUrlSchema {
  username: string,
}

export interface DataBaseSchemaWithId extends DataBaseSchema {
  id: number,
}