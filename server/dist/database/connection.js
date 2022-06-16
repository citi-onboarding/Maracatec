"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;

var _typeorm = require("typeorm");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const connection = new _typeorm.DataSource({
  name: 'default',
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  url: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : undefined,
  entities: [process.env.NODE_ENV !== 'production' ? './src/models/*' : './dist/models/*']
});
exports.connection = connection;
connection.initialize().then(async () => {
  console.log('📦 Successfully connected with database');
}).catch(error => {
  console.log('Error connecting to database', error);
});