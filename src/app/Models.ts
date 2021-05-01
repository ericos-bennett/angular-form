export class Order {

  constructor(
    public main: string,
    public side: string,
    public condiments?: { [key: string]: string },
    public doneness?: string,
    public friesSize?: string,
    public dressing?: string,
    public potatoCount?: number,
    public specialRequests?: string
  ) { }

}

export class Cart {



}
