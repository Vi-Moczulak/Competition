import { Injectable } from '@angular/core';
import { Competition } from 'src/models/Competition';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  competitions: Competition[] = [
    { id: 1, name: "Weekly Challenges", ownerId: 5, participants: [1, 2, 3, 4,5,6,7,8,9,10], dateTo: new Date('2023-12-20'), prize: { currency: 'xBits', value: 20000 } },
    { id: 2, name: "Double Gain Week Contest", ownerId: 5, participants: [4, 1,2], dateTo: new Date('2023-12-30'), prize: { currency: 'xBits', value: 20000 } },
  ];
  users: User[] = [
    { id: 1, username: 'rKors', firstName: 'Roger', lastName: 'Korsgaard', verification: true, wins: 10, balance: 3000, competitions: { 1: { position: 1, alerts: 20, winRate: 0.85, yield: 0.11, balance: 7500, balancePercent: 0.45 }, 2: { position: 2, alerts: 20, winRate: 0.85, yield: 0.11, balance: 3500, balancePercent: 0.30 } } },
    { id: 2, username: 'charH', firstName: 'Charlie', lastName: 'Herwitz', verification: true, wins: 10, balance: 3000, competitions: { 1: { position: 2, alerts: 20, winRate: 0.85, yield: 0.11, balance: 1430, balancePercent: 0.25 }, 2: { position: 3, alerts: 20, winRate: 0.85, yield: 0.11, balance: -3500, balancePercent: 0.10 } } },
    { id: 3, username: 'aMong', firstName: 'Ahmad', lastName: 'Mango', verification: false, wins: 10, balance: 3000, competitions: { 1: { position: 3, alerts: 20, winRate: 0.85, yield: 0.11, balance: -1500, balancePercent: 0.10 } } },
    { id: 4, username: 'zMong', firstName: 'Zain', lastName: 'Mango', verification: true, wins: 10, balance: 3000, competitions: { 2: { position: 1, alerts: 20, winRate: 0.85, yield: 0.11, balance: 3500, balancePercent: 0.30 } } },
    { id: 5, username: 'rog13K', firstName: 'Roger', lastName: 'Krat', verification: true, wins: 10, balance: 3000, competitions: {} },
    { id: 6, username: 'ag', firstName: 'Alex', lastName: 'Green', verification: true, wins: 10, balance: 3000, competitions: {} },
  ];

  getCompetitions() {
    return this.competitions;
  }

  getUsers() {
    return this.users;
  }

  getUser(id: Number) {
    var filtered = this.users.filter(user => user.id == id);
    return filtered.length > 0 ? filtered[0] : null;

  }
}
