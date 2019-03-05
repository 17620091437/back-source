/*
 * 表结构
 */

/*
 * 数据类型
  Sequelize.STRING                      // VARCHAR(255)
  Sequelize.STRING(1234)                // VARCHAR(1234)
  Sequelize.STRING.BINARY               // VARCHAR BINARY
  Sequelize.TEXT                        // TEXT
  Sequelize.TEXT('tiny')                // TINYTEXT

  Sequelize.INTEGER                     // INTEGER
  Sequelize.BIGINT                      // BIGINT
  Sequelize.BIGINT(11)                  // BIGINT(11)

  Sequelize.FLOAT                       // FLOAT
  Sequelize.FLOAT(11)                   // FLOAT(11)
  Sequelize.FLOAT(11, 12)               // FLOAT(11,12)

  Sequelize.REAL                        // REAL         仅限于PostgreSQL.
  Sequelize.REAL(11)                    // REAL(11)     仅限于PostgreSQL.
  Sequelize.REAL(11, 12)                // REAL(11,12)  仅限于PostgreSQL.

  Sequelize.DOUBLE                      // DOUBLE
  Sequelize.DOUBLE(11)                  // DOUBLE(11)
  Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)

  Sequelize.DECIMAL                     // DECIMAL
  Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

  Sequelize.DATE                        // DATETIME 针对 mysql / sqlite, TIMESTAMP WITH TIME ZONE 针对 postgres
  Sequelize.DATE(6)                     // DATETIME(6) 针对 mysql 5.6.4+. 小数秒支持多达6位精度
  Sequelize.DATEONLY                    // DATE 不带时间.
  Sequelize.BOOLEAN                     // TINYINT(1)

  Sequelize.ENUM('value 1', 'value 2')  // 一个允许具有 “value 1” 和 “value 2” 的 ENUM
  Sequelize.ARRAY(Sequelize.TEXT)       // 定义一个数组。 仅限于 PostgreSQL。
  Sequelize.ARRAY(Sequelize.ENUM)       // 定义一个 ENUM 数组. 仅限于 PostgreSQL。

  Sequelize.JSON                        // JSON 列. 仅限于 PostgreSQL, SQLite and MySQL.
  Sequelize.JSONB                       // JSONB 列. 仅限于 PostgreSQL .

  Sequelize.BLOB                        // BLOB (PostgreSQL 二进制)
  Sequelize.BLOB('tiny')                // TINYBLOB (PostgreSQL 二进制. 其他参数是 medium 和 long)

  Sequelize.UUID                        // PostgreSQL 和 SQLite 的 UUID 数据类型, CHAR(36) BINARY 针对于 MySQL (使用默认值: Sequelize.UUIDV1 或 Sequelize.UUIDV4 来让 sequelize 自动生成 ID)

  Sequelize.CIDR                        // PostgreSQL 的 CIDR 数据类型
  Sequelize.INET                        // PostgreSQL 的 INET 数据类型
  Sequelize.MACADDR                     // PostgreSQL 的 MACADDR

  Sequelize.RANGE(Sequelize.INTEGER)    // 定义 int4range 范围. 仅限于 PostgreSQL.
  Sequelize.RANGE(Sequelize.BIGINT)     // 定义 int8range 范围. 仅限于 PostgreSQL.
  Sequelize.RANGE(Sequelize.DATE)       // 定义 tstzrange 范围. 仅限于 PostgreSQL.
  Sequelize.RANGE(Sequelize.DATEONLY)   // 定义 daterange 范围. 仅限于 PostgreSQL.
  Sequelize.RANGE(Sequelize.DECIMAL)    // 定义 numrange 范围. 仅限于 PostgreSQL.

  Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // 定义 tstzrange 范围的数组. 仅限于 PostgreSQL.

  Sequelize.GEOMETRY                    // 空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.
  Sequelize.GEOMETRY('POINT')           // 具有几何类型的空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.
  Sequelize.GEOMETRY('POINT', 4326)     // 具有几何类型和SRID的空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.

 */

const Sequelize = require('sequelize');
module.exports = {
  tableName: 'demo',
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: Sequelize.STRING,
    }
  },
}