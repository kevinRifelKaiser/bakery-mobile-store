import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("userData.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists userData (id integer primary key not null, picture text not null, name text not null, lat real not null, lng real not null, cardNumber integer not null, email text not null);",
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

export const insertUserData = (id, picture, name, lat, lng, cardNumber) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into userData (id, picture, name, lat, lng, cardNumber) VALUES (?, ?, ?, ?, ?, ?);",
        [id, picture, name, lat, lng, cardNumber],
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
        "SELECT * FROM userData",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
