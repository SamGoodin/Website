import sqlite3
from sqlite3 import Error
import string


class sqlite:
    
    def __init__(self):
        self.con = None
        self.cur = None
        self.db = None
    
    # attempts to connect to desired database
    def create_connection(self, path):
        try:
            self.con = sqlite3.connect(path)
            self.cur = self.con.cursor()
            self.db = path.split("/")[-1].split(".")[0]
            print(f"Connection to SQLite DB <{path}> successful!")
            return True
        except Error as e:
            print(f"The error {e} occurred")
            return False
            
    # creates a table within the current database
    def create_table(self, tableName, arguments):
        if self.table_exists(tableName):
            print(f"CREATE TABLE: Unable to create table <{tableName}>: Table already exists")
            return False
        else:
            args = "("
            for arg in arguments:
                args += arg[0] + " " + arg[1] + ","
            args = args[:-1]
            args += ")"
            sql = "CREATE TABLE " + tableName + " " + args
            self.cur.execute(sql)
            self.con.commit()
            print(f"CREATE TABLE: Table <{tableName}> created with args <{arguments}>")
            return True
        
    # Check if the table exists in the current database
    # returns true if exists, false if not
    def table_exists(self, tableName):
        self.cur.execute("SELECT count(name) FROM sqlite_master WHERE type='table' AND name='" + tableName + "' ")
        if self.cur.fetchone()[0] != 0:
            print(f"TABLE CHECK: The table <{tableName}> exists in DB <{self.db}>")
            return True
        else:
            print(f"TABLE CHECK: The table <{tableName}> does not exist in DB <{self.db}>")
            return False
    
    # Check if a row has value in column key inside table name
    def row_exists(self, tableName, key, value):
        if not self.table_exists(tableName):
            print(f"ROW CHECK: Unable to check row for <{tableName}>: Table does not exist")
            return False
        if type(value) is not string:
            value = str(value)
        if type(key) is not string:
            key = str(key)
        self.cur.execute("SELECT rowid FROM " + tableName + " WHERE " + key + "=" + value)
        rowid = self.cur.fetchone()
        if rowid is None:
            print(f"ROW CHECK: The row does not exist in <{tableName}>")
            return False
        else:
            print(f"ROW CHECK: The row exists in <{tableName}>")
            return True
        
    # Insert desired row data into given table name
    def insert_row_into_table(self, tableName, row):
        # Row must be provided in tuple format (x, y, z, ...)
        if self.table_exists(tableName) and type(row) is tuple:
            try:
                self.cur.execute("INSERT INTO " + tableName + " VALUES" + str(row))
                self.con.commit()
            except Error as e:
                print(f"INSERT ROW INTO TABLE: Error when inserting row into table: {e}")
            return True
        else:
            if not self.table_exists(tableName):
                print(f"INSERT ROW INTO TABLE: Unable to insert row into <{tableName}>: Table does not exist")
            if not type(row) is tuple:
                print(f"INSERT ROW INTO TABLE: Unable to insert row into <{tableName}>: Data provided not in tuple format")
            return False
            
    def update_row(self, tableName, setKey, setValue, checkKey, checkValue):
        if not self.row_exists(tableName, checkKey, checkValue):
            print(f"UPDATE ROW: Unable to update row for <{tableName}>: Row does not exist")
            return False
        else:
            try:
                if type(setValue) is not string:
                    setValue = str(setValue)
                if type(checkValue) is not string:
                    checkValue = str(checkValue)
                if type(setKey) is not string:
                    setKey = str(setKey)
                if type(checkKey) is not string:
                    checkKey = str(checkKey)
                self.cur.execute("UPDATE " + tableName + " SET " + setKey + " = '" + setValue + "' WHERE " + checkKey + " = " + checkValue)
                self.con.commit()
                return True
            except Error as e:
                print(f"UPDATE ROW: Error when updating table: {e}")
                return False
        
    # returns all rows of data in given table name
    def get_table_data(self, tableName):
        if not self.table_exists(tableName):
            print(f"GET TABLE DATA: Unable to get data for <{tableName}>: Table does not exist")
            return False
        else:
            self.cur.execute("SELECT * FROM " + tableName)
            return self.cur.fetchall()
    
    # returns all table names in the current database
    def return_all_table_names(self):
        self.cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
        return self.cur.fetchall()


if __name__ == '__main__':
    db = "SQLite3/example.sqlite"
    
    database = sqlite()
    database.create_connection(db)

    #database.table_exists('example')
    #database.table_exists('employees')
    
    #database.create_table('people', [('height', 'real'), ('name', 'text')])
    print(database.insert_row_into_table('employees', (195001998, 'Sam Goodin', -29.50)))
    
    print(database.get_table_data('employees'))
    #print(database.row_exists('employees', 'id', 19500))
    
    print(database.update_row('employees', 'name', 'Goodin-Sam', 'id', 19500))
    print(database.get_table_data('employees'))
    
    
    
    