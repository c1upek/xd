import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DetailingHistoryService {
  constructor(private _apollo: Apollo) {}

  public getCarServiceHistories(carId: string): any {
    return this._apollo.watchQuery({
      query: gql`
        {
          serviceHistories(orderBy: publishedAt_DESC, where: {car: {id: "${carId}"}}) {
            date
            id
            price
            description {
              html
            }
            car {
              id
            }
          }
        }
      `,
    }).valueChanges;
  }

  public getClients(): any {
    return this._apollo.watchQuery({
      query: gql`
        {
          clients(orderBy: publishedAt_DESC) {
            id
            firstname
            lastname
          }
        }
      `,
    }).valueChanges;
  }

  public getClientCars(clientId: string): any {
    return this._apollo.watchQuery({
      query: gql`
        {
          cars(where: {client: {id: "${clientId}"}}) {
            id
            brand
            model
            registrationNumber
            client {
              id
              firstname
              lastname
            }
          }
        }
      `,
    }).valueChanges;
  }

  public getCar(carId: string): any {
    return this._apollo.watchQuery({
      query: gql`
        {
          car(where: {id: "${carId}"}) {
            id
            brand
            model
            registrationNumber
            client {
              id
              firstname
              lastname
            }
          }
        }
      `,
    }).valueChanges;
  }
}
