USE 6uoPlatform;

CREATE TABLE IF NOT EXISTS authentication(

    uuid VARCHAR(64) DEFAULT (UUID()) NOT NULL,
    email VARCHAR(256) NOT NULL,
    hash VARCHAR(128) NOT NULL,
    salt VARCHAR(64) NOT NULL,
    PRIMARY KEY( uuid )

);

INSERT INTO authentication( email, hash, salt ) VALUES ( "test1@6uogames.com", "ef21ef06335171d01a6f1d579b19e597c6dde4e4a2574091603186ca04b7b36d935d2e12f318bb055cfb573dba024c17ce151e884b30fbe9fb88ae000f4345b4", "df21b3e212d229ebfce9095674dd46e0" );
