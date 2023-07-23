import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("userData2.db");

export const initUserData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists userData2 (id integer primary key autoincrement, picture text not null, name text not null, lat real not null, lng real not null, cardNumber integer not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertUserData = (picture, name, lat, lng, cardNumber) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into userData2 (picture, name, lat, lng, cardNumber) VALUES (?, ?, ?, ?, ?);",
        [picture, name, lat, lng, cardNumber],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchUserData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM userData2",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
