export type Textbox = {
  id: string,
  title: string,
  pattern?: RegExp
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
  options: string[]
}

export type Order = {
  main: string,
  condiments?: string[],
  doneness?: string,
  side: string,
  friesSize?: string,
  dressing?: string,
  potatoCount?: number,
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

export type ValidOrder = {
  main: 'burger' | 'steak',
  condiments?: ('ketchup' | 'mustard' | 'lettuce' | 'tomato')[],
  doneness?: 'rare' | 'medium' | 'well done',
  side: 'fries' | 'salad' | 'baked potato',
  friesSize?: 'small' | 'large',
  dressing?: 'caesar' | 'balsamic',
  potatoCount?: number,
  specialRequests?: string
}
