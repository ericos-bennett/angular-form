export type Textbox = {
  id: string,
  title: string,
  pattern?: RegExp | string,
  required?: boolean,
  errormsg?: string
}

export type Dropdown = {
  id: string,
  title: string,
  options: string[]
}

export type Checkboxes = {
  id: string,
  title: string,
  options: string[]
}

export type Radio = {
  id: string,
  title: string,
  options: string[],
}

export type Order = {
  main: string,
  condiments?: string[],
  doneness?: string,
  side: string,
  friesSize?: string,
  dressing?: string,
  potatoCount?: string,
  specialRequests?: string
}

export type Meal = {
  id?: number,
  main: string,
  mainModifier?: string | { [key: string]: string; },
  side: string,
  sideModifier?: string | number,
  specialRequests?: string
}
