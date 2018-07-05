(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '--',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sql',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        \"ACCESSIBLE\", \"ACCOUNT\", \"ACTION\", \"ADD\", \"AFTER\", \"AGAINST\", \"AGGREGATE\", \"ALGORITHM\", \"ALL\", \"ALTER\", \"ALWAYS\", \"ANALYSE\", \"ANALYZE\",\n        \"AND\", \"ANY\", \"AS\", \"ASC\", \"ASCII\", \"ASENSITIVE\", \"AT\", \"AUTOEXTEND_SIZE\", \"AUTO_INCREMENT\", \"AVG\", \"AVG_ROW_LENGTH\", \"BACKUP\", \"BEFORE\",\n        \"BEGIN\", \"BETWEEN\", \"BIGINT\", \"BINARY\", \"BINLOG\", \"BIT\", \"BLOB\", \"BLOCK\", \"BOOL\", \"BOOLEAN\", \"BOTH\", \"BTREE\", \"BY\", \"BYTE\", \"CACHE\", \"CALL\",\n        \"CASCADE\", \"CASCADED\", \"CASE\", \"CATALOG_NAME\", \"CHAIN\", \"CHANGE\", \"CHANGED\", \"CHANNEL\", \"CHAR\", \"CHARACTER\", \"CHARSET\", \"CHECK\", \"CHECKSUM\",\n        \"CIPHER\", \"CLASS_ORIGIN\", \"CLIENT\", \"CLOSE\", \"COALESCE\", \"CODE\", \"COLLATE\", \"COLLATION\", \"COLUMN\", \"COLUMNS\", \"COLUMN_FORMAT\", \"COLUMN_NAME\",\n        \"COMMENT\", \"COMMIT\", \"COMMITTED\", \"COMPACT\", \"COMPLETION\", \"COMPRESSED\", \"COMPRESSION\", \"CONCURRENT\", \"CONDITION\", \"CONNECTION\", \"CONSISTENT\",\n        \"CONSTRAINT\", \"CONSTRAINT_CATALOG\", \"CONSTRAINT_NAME\", \"CONSTRAINT_SCHEMA\", \"CONTAINS\", \"CONTEXT\", \"CONTINUE\", \"CONVERT\", \"CPU\", \"CREATE\",\n        \"CROSS\", \"CUBE\", \"CURRENT\", \"CURRENT_DATE\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_USER\", \"CURSOR\", \"CURSOR_NAME\", \"DATA\", \"DATABASE\",\n        \"DATABASES\", \"DATAFILE\", \"DATE\", \"DATETIME\", \"DAY\", \"DAY_HOUR\", \"DAY_MICROSECOND\", \"DAY_MINUTE\", \"DAY_SECOND\", \"DEALLOCATE\", \"DEC\", \"DECIMAL\",\n        \"DECLARE\", \"DEFAULT\", \"DEFAULT_AUTH\", \"DEFINER\", \"DELAYED\", \"DELAY_KEY_WRITE\", \"DELETE\", \"DESC\", \"DESCRIBE\", \"DES_KEY_FILE\", \"DETERMINISTIC\",\n        \"DIAGNOSTICS\", \"DIRECTORY\", \"DISABLE\", \"DISCARD\", \"DISK\", \"DISTINCT\", \"DISTINCTROW\", \"DIV\", \"DO\", \"DOUBLE\", \"DROP\", \"DUAL\", \"DUMPFILE\",\n        \"DUPLICATE\", \"DYNAMIC\", \"EACH\", \"ELSE\", \"ELSEIF\", \"ENABLE\", \"ENCLOSED\", \"ENCRYPTION\", \"END\", \"ENDS\", \"ENGINE\", \"ENGINES\", \"ENUM\", \"ERROR\",\n        \"ERRORS\", \"ESCAPE\", \"ESCAPED\", \"EVENT\", \"EVENTS\", \"EVERY\", \"EXCHANGE\", \"EXECUTE\", \"EXISTS\", \"EXIT\", \"EXPANSION\", \"EXPIRE\", \"EXPLAIN\", \"EXPORT\",\n        \"EXTENDED\", \"EXTENT_SIZE\", \"FALSE\", \"FAST\", \"FAULTS\", \"FETCH\", \"FIELDS\", \"FILE\", \"FILE_BLOCK_SIZE\", \"FILTER\", \"FIRST\", \"FIXED\", \"FLOAT\", \"FLOAT4\",\n        \"FLOAT8\", \"FLUSH\", \"FOLLOWS\", \"FOR\", \"FORCE\", \"FOREIGN\", \"FORMAT\", \"FOUND\", \"FROM\", \"FULL\", \"FULLTEXT\", \"FUNCTION\", \"GENERAL\", \"GENERATED\",\n        \"GEOMETRY\", \"GEOMETRYCOLLECTION\", \"GET\", \"GET_FORMAT\", \"GLOBAL\", \"GRANT\", \"GRANTS\", \"GROUP\", \"GROUP_REPLICATION\", \"HANDLER\", \"HASH\", \"HAVING\",\n        \"HELP\", \"HIGH_PRIORITY\", \"HOST\", \"HOSTS\", \"HOUR\", \"HOUR_MICROSECOND\", \"HOUR_MINUTE\", \"HOUR_SECOND\", \"IDENTIFIED\", \"IF\", \"IGNORE\", \"IGNORE_SERVER_IDS\",\n        \"IMPORT\", \"INDEX\", \"INDEXES\", \"INFILE\", \"INITIAL_SIZE\", \"INNER\", \"INOUT\", \"INSENSITIVE\", \"INSERT\", \"INSERT_METHOD\", \"INSTALL\", \"INSTANCE\",\n        \"INT\", \"INT1\", \"INT2\", \"INT3\", \"INT4\", \"INT8\", \"INTEGER\", \"INTERVAL\", \"INTO\", \"INVOKER\", \"IO\", \"IO_AFTER_GTIDS\", \"IO_BEFORE_GTIDS\", \"IO_THREAD\",\n        \"IPC\", \"ISOLATION\", \"ISSUER\", \"ITERATE\", \"JOIN\", \"JSON\", \"KEY\", \"KEYS\", \"KEY_BLOCK_SIZE\", \"KILL\", \"LANGUAGE\", \"LAST\", \"LEADING\", \"LEAVE\",\n        \"LEAVES\", \"LEFT\", \"LESS\", \"LEVEL\", \"LIKE\", \"LIMIT\", \"LINEAR\", \"LINES\", \"LINESTRING\", \"LIST\", \"LOAD\", \"LOCAL\", \"LOCALTIME\", \"LOCALTIMESTAMP\", \"LOCK\",\n        \"LOCKS\", \"LOGFILE\", \"LOGS\", \"LONG\", \"LONGBLOB\", \"LONGTEXT\", \"LOOP\", \"LOW_PRIORITY\", \"MASTER\", \"MASTER_AUTO_POSITION\", \"MASTER_BIND\", \"MASTER_CONNECT_RETRY\",\n        \"MASTER_DELAY\", \"MASTER_HEARTBEAT_PERIOD\", \"MASTER_HOST\", \"MASTER_LOG_FILE\", \"MASTER_LOG_POS\", \"MASTER_PASSWORD\", \"MASTER_PORT\", \"MASTER_RETRY_COUNT\",\n        \"MASTER_SERVER_ID\", \"MASTER_SSL\", \"MASTER_SSL_CA\", \"MASTER_SSL_CAPATH\", \"MASTER_SSL_CERT\", \"MASTER_SSL_CIPHER\", \"MASTER_SSL_CRL\", \"MASTER_SSL_CRLPATH\",\n        \"MASTER_SSL_KEY\", \"MASTER_SSL_VERIFY_SERVER_CERT\", \"MASTER_TLS_VERSION\", \"MASTER_USER\", \"MATCH\", \"MAXVALUE\", \"MAX_CONNECTIONS_PER_HOUR\", \"MAX_QUERIES_PER_HOUR\",\n        \"MAX_ROWS\", \"MAX_SIZE\", \"MAX_STATEMENT_TIME\", \"MAX_UPDATES_PER_HOUR\", \"MAX_USER_CONNECTIONS\", \"MEDIUM\", \"MEDIUMBLOB\", \"MEDIUMINT\", \"MEDIUMTEXT\", \"MEMORY\",\n        \"MERGE\", \"MESSAGE_TEXT\", \"MICROSECOND\", \"MIDDLEINT\", \"MIGRATE\", \"MINUTE\", \"MINUTE_MICROSECOND\", \"MINUTE_SECOND\", \"MIN_ROWS\", \"MOD\", \"MODE\", \"MODIFIES\",\n        \"MODIFY\", \"MONTH\", \"MULTILINESTRING\", \"MULTIPOINT\", \"MULTIPOLYGON\", \"MUTEX\", \"MYSQL_ERRNO\", \"NAME\", \"NAMES\", \"NATIONAL\", \"NATURAL\", \"NCHAR\", \"NDB\",\n        \"NDBCLUSTER\", \"NEVER\", \"NEW\", \"NEXT\", \"NO\", \"NODEGROUP\", \"NONBLOCKING\", \"NONE\", \"NO_WAIT\", \"NO_WRITE_TO_BINLOG\", \"NUMBER\", \"NUMERIC\",\n        \"NVARCHAR\", \"OFFSET\", \"OLD_PASSWORD\", \"ON\", \"ONE\", \"ONLY\", \"OPEN\", \"OPTIMIZE\", \"OPTIMIZER_COSTS\", \"OPTION\", \"OPTIONALLY\", \"OPTIONS\", \"OR\", \"ORDER\",\n        \"OUT\", \"OUTER\", \"OUTFILE\", \"OWNER\", \"PACK_KEYS\", \"PAGE\", \"PARSER\", \"PARSE_GCOL_EXPR\", \"PARTIAL\", \"PARTITION\", \"PARTITIONING\", \"PARTITIONS\", \"PASSWORD\",\n        \"PHASE\", \"PLUGIN\", \"PLUGINS\", \"PLUGIN_DIR\", \"POINT\", \"POLYGON\", \"PORT\", \"PRECEDES\", \"PRECISION\", \"PREPARE\", \"PRESERVE\", \"PREV\", \"PRIMARY\", \"PRIVILEGES\",\n        \"PROCEDURE\", \"PROCESSLIST\", \"PROFILE\", \"PROFILES\", \"PROXY\", \"PURGE\", \"QUARTER\", \"QUERY\", \"QUICK\", \"RANGE\", \"READ\", \"READS\", \"READ_ONLY\", \"READ_WRITE\",\n        \"REAL\", \"REBUILD\", \"RECOVER\", \"REDOFILE\", \"REDO_BUFFER_SIZE\", \"REDUNDANT\", \"REFERENCES\", \"REGEXP\", \"RELAY\", \"RELAYLOG\", \"RELAY_LOG_FILE\", \"RELAY_LOG_POS\",\n        \"RELAY_THREAD\", \"RELEASE\", \"RELOAD\", \"REMOVE\", \"RENAME\", \"REORGANIZE\", \"REPAIR\", \"REPEAT\", \"REPEATABLE\", \"REPLACE\", \"REPLICATE_DO_DB\", \"REPLICATE_DO_TABLE\",\n        \"REPLICATE_IGNORE_DB\", \"REPLICATE_IGNORE_TABLE\", \"REPLICATE_REWRITE_DB\", \"REPLICATE_WILD_DO_TABLE\", \"REPLICATE_WILD_IGNORE_TABLE\", \"REPLICATION\", \"REQUIRE\",\n        \"RESET\", \"RESIGNAL\", \"RESTORE\", \"RESTRICT\", \"RESUME\", \"RETURN\", \"RETURNED_SQLSTATE\", \"RETURNS\", \"REVERSE\", \"REVOKE\", \"RIGHT\", \"RLIKE\", \"ROLLBACK\", \"ROLLUP\",\n        \"ROTATE\", \"ROUTINE\", \"ROW\", \"ROWS\", \"ROW_COUNT\", \"ROW_FORMAT\", \"RTREE\", \"SAVEPOINT\", \"SCHEDULE\", \"SCHEMA\", \"SCHEMAS\", \"SCHEMA_NAME\", \"SECOND\", \"SECOND_MICROSECOND\",\n        \"SECURITY\", \"SELECT\", \"SENSITIVE\", \"SEPARATOR\", \"SERIAL\", \"SERIALIZABLE\", \"SERVER\", \"SESSION\", \"SET\", \"SHARE\", \"SHOW\", \"SHUTDOWN\", \"SIGNAL\", \"SIGNED\", \"SIMPLE\",\n        \"SLAVE\", \"SLOW\", \"SMALLINT\", \"SNAPSHOT\", \"SOCKET\", \"SOME\", \"SONAME\", \"SOUNDS\", \"SOURCE\", \"SPATIAL\", \"SPECIFIC\", \"SQL\", \"SQLEXCEPTION\", \"SQLSTATE\", \"SQLWARNING\",\n        \"SQL_AFTER_GTIDS\", \"SQL_AFTER_MTS_GAPS\", \"SQL_BEFORE_GTIDS\", \"SQL_BIG_RESULT\", \"SQL_BUFFER_RESULT\", \"SQL_CACHE\", \"SQL_CALC_FOUND_ROWS\", \"SQL_NO_CACHE\",\n        \"SQL_SMALL_RESULT\", \"SQL_THREAD\", \"SQL_TSI_DAY\", \"SQL_TSI_HOUR\", \"SQL_TSI_MINUTE\", \"SQL_TSI_MONTH\", \"SQL_TSI_QUARTER\", \"SQL_TSI_SECOND\", \"SQL_TSI_WEEK\",\n        \"SQL_TSI_YEAR\", \"SSL\", \"STACKED\", \"START\", \"STARTING\", \"STARTS\", \"STATS_AUTO_RECALC\", \"STATS_PERSISTENT\", \"STATS_SAMPLE_PAGES\", \"STATUS\", \"STOP\", \"STORAGE\",\n        \"STORED\", \"STRAIGHT_JOIN\", \"STRING\", \"SUBCLASS_ORIGIN\", \"SUBJECT\", \"SUBPARTITION\", \"SUBPARTITIONS\", \"SUPER\", \"SUSPEND\", \"SWAPS\", \"SWITCHES\", \"TABLE\", \"TABLES\",\n        \"TABLESPACE\", \"TABLE_CHECKSUM\", \"TABLE_NAME\", \"TEMPORARY\", \"TEMPTABLE\", \"TERMINATED\", \"TEXT\", \"THAN\", \"THEN\", \"TIME\", \"TIMESTAMP\", \"TIMESTAMPADD\", \"TIMESTAMPDIFF\",\n        \"TINYBLOB\", \"TINYINT\", \"TINYTEXT\", \"TO\", \"TRAILING\", \"TRANSACTION\", \"TRIGGER\", \"TRIGGERS\", \"TRUE\", \"TRUNCATE\", \"TYPE\", \"TYPES\", \"UNCOMMITTED\", \"UNDEFINED\", \"UNDO\",\n        \"UNDOFILE\", \"UNDO_BUFFER_SIZE\", \"UNICODE\", \"UNINSTALL\", \"UNION\", \"UNIQUE\", \"UNKNOWN\", \"UNLOCK\", \"UNSIGNED\", \"UNTIL\", \"UPDATE\", \"UPGRADE\", \"USAGE\", \"USE\", \"USER\",\n        \"USER_RESOURCES\", \"USE_FRM\", \"USING\", \"UTC_DATE\", \"UTC_TIME\", \"UTC_TIMESTAMP\", \"VALIDATION\", \"VALUE\", \"VALUES\", \"VARBINARY\", \"VARCHAR\", \"VARCHARACTER\", \"VARIABLES\",\n        \"VARYING\", \"VIEW\", \"VIRTUAL\", \"WAIT\", \"WARNINGS\", \"WEEK\", \"WEIGHT_STRING\", \"WHEN\", \"WHERE\", \"WHILE\", \"WITH\", \"WITHOUT\", \"WORK\", \"WRAPPER\", \"WRITE\", \"X509\", \"XA\",\n        \"XID\", \"XML\", \"XOR\", \"YEAR\", \"YEAR_MONTH\", \"ZEROFILL\"\n    ],\n    operators: [\n        \"AND\", \"BETWEEN\", \"IN\", \"LIKE\", \"NOT\", \"OR\", \"IS\", \"NULL\", \"INTERSECT\", \"UNION\", \"INNER\", \"JOIN\", \"LEFT\", \"OUTER\", \"RIGHT\"\n    ],\n    builtinFunctions: [\n        \"ABS\", \"ACOS\", \"ADDDATE\", \"ADDTIME\", \"AES_DECRYPT\", \"AES_ENCRYPT\", \"ANY_VALUE\", \"Area\", \"AsBinary\", \"AsWKB\", \"ASCII\", \"ASIN\",\n        \"AsText\", \"AsWKT\", \"ASYMMETRIC_DECRYPT\", \"ASYMMETRIC_DERIVE\", \"ASYMMETRIC_ENCRYPT\", \"ASYMMETRIC_SIGN\", \"ASYMMETRIC_VERIFY\",\n        \"ATAN\", \"ATAN2\", \"ATAN\", \"AVG\", \"BENCHMARK\", \"BIN\", \"BIT_AND\", \"BIT_COUNT\", \"BIT_LENGTH\", \"BIT_OR\", \"BIT_XOR\", \"Buffer\", \"CAST\",\n        \"CEIL\", \"CEILING\", \"Centroid\", \"CHAR\", \"CHAR_LENGTH\", \"CHARACTER_LENGTH\", \"CHARSET\", \"COALESCE\", \"COERCIBILITY\", \"COLLATION\",\n        \"COMPRESS\", \"CONCAT\", \"CONCAT_WS\", \"CONNECTION_ID\", \"Contains\", \"CONV\", \"CONVERT\", \"CONVERT_TZ\", \"ConvexHull\", \"COS\", \"COT\",\n        \"COUNT\", \"CRC32\", \"CREATE_ASYMMETRIC_PRIV_KEY\", \"CREATE_ASYMMETRIC_PUB_KEY\", \"CREATE_DH_PARAMETERS\", \"CREATE_DIGEST\", \"Crosses\",\n        \"CURDATE\", \"CURRENT_DATE\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_USER\", \"CURTIME\", \"DATABASE\", \"DATE\", \"DATE_ADD\",\n        \"DATE_FORMAT\", \"DATE_SUB\", \"DATEDIFF\", \"DAY\", \"DAYNAME\", \"DAYOFMONTH\", \"DAYOFWEEK\", \"DAYOFYEAR\", \"DECODE\", \"DEFAULT\", \"DEGREES\",\n        \"DES_DECRYPT\", \"DES_ENCRYPT\", \"Dimension\", \"Disjoint\", \"Distance\", \"ELT\", \"ENCODE\", \"ENCRYPT\", \"EndPoint\", \"Envelope\", \"Equals\",\n        \"EXP\", \"EXPORT_SET\", \"ExteriorRing\", \"EXTRACT\", \"ExtractValue\", \"FIELD\", \"FIND_IN_SET\", \"FLOOR\", \"FORMAT\", \"FOUND_ROWS\", \"FROM_BASE64\",\n        \"FROM_DAYS\", \"FROM_UNIXTIME\", \"GeomCollFromText\", \"GeometryCollectionFromText\", \"GeomCollFromWKB\", \"GeometryCollectionFromWKB\",\n        \"GeometryCollection\", \"GeometryN\", \"GeometryType\", \"GeomFromText\", \"GeometryFromText\", \"GeomFromWKB\", \"GeometryFromWKB\", \"GET_FORMAT\",\n        \"GET_LOCK\", \"GLength\", \"GREATEST\", \"GROUP_CONCAT\", \"GTID_SUBSET\", \"GTID_SUBTRACT\", \"HEX\", \"HOUR\", \"IF\", \"IFNULL\", \"INET_ATON\",\n        \"INET_NTOA\", \"INET6_ATON\", \"INET6_NTOA\", \"INSERT\", \"INSTR\", \"InteriorRingN\", \"Intersects\", \"INTERVAL\", \"IS_FREE_LOCK\", \"IS_IPV4\",\n        \"IS_IPV4_COMPAT\", \"IS_IPV4_MAPPED\", \"IS_IPV6\", \"IS_USED_LOCK\", \"IsClosed\", \"IsEmpty\", \"ISNULL\", \"IsSimple\", \"JSON_APPEND\", \"JSON_ARRAY\",\n        \"JSON_ARRAY_APPEND\", \"JSON_ARRAY_INSERT\", \"JSON_CONTAINS\", \"JSON_CONTAINS_PATH\", \"JSON_DEPTH\", \"JSON_EXTRACT\", \"JSON_INSERT\", \"JSON_KEYS\",\n        \"JSON_LENGTH\", \"JSON_MERGE\", \"JSON_MERGE_PRESERVE\", \"JSON_OBJECT\", \"JSON_QUOTE\", \"JSON_REMOVE\", \"JSON_REPLACE\", \"JSON_SEARCH\", \"JSON_SET\",\n        \"JSON_TYPE\", \"JSON_UNQUOTE\", \"JSON_VALID\", \"LAST_INSERT_ID\", \"LCASE\", \"LEAST\", \"LEFT\", \"LENGTH\", \"LineFromText\", \"LineStringFromText\",\n        \"LineFromWKB\", \"LineStringFromWKB\", \"LineString\", \"LN\", \"LOAD_FILE\", \"LOCALTIME\", \"LOCALTIMESTAMP\", \"LOCATE\", \"LOG\", \"LOG10\", \"LOG2\",\n        \"LOWER\", \"LPAD\", \"LTRIM\", \"MAKE_SET\", \"MAKEDATE\", \"MAKETIME\", \"MASTER_POS_WAIT\", \"MAX\", \"MBRContains\", \"MBRCoveredBy\", \"MBRCovers\",\n        \"MBRDisjoint\", \"MBREqual\", \"MBREquals\", \"MBRIntersects\", \"MBROverlaps\", \"MBRTouches\", \"MBRWithin\", \"MD5\", \"MICROSECOND\", \"MID\",\n        \"MIN\", \"MINUTE\", \"MLineFromText\", \"MultiLineStringFromText\", \"MLineFromWKB\", \"MultiLineStringFromWKB\", \"MOD\", \"MONTH\", \"MONTHNAME\",\n        \"MPointFromText\", \"MultiPointFromText\", \"MPointFromWKB\", \"MultiPointFromWKB\", \"MPolyFromText\", \"MultiPolygonFromText\", \"MPolyFromWKB\",\n        \"MultiPolygonFromWKB\", \"MultiLineString\", \"MultiPoint\", \"MultiPolygon\", \"NAME_CONST\", \"NOT IN\", \"NOW\", \"NULLIF\", \"NumGeometries\",\n        \"NumInteriorRings\", \"NumPoints\", \"OCT\", \"OCTET_LENGTH\", \"OLD_PASSWORD\", \"ORD\", \"Overlaps\", \"PASSWORD\", \"PERIOD_ADD\", \"PERIOD_DIFF\",\n        \"PI\", \"Point\", \"PointFromText\", \"PointFromWKB\", \"PointN\", \"PolyFromText\", \"PolygonFromText\", \"PolyFromWKB\", \"PolygonFromWKB\", \"Polygon\",\n        \"POSITION\", \"POW\", \"POWER\", \"PROCEDURE ANALYSE\", \"QUARTER\", \"QUOTE\", \"RADIANS\", \"RAND\", \"RANDOM_BYTES\", \"RELEASE_ALL_LOCKS\", \"RELEASE_LOCK\",\n        \"REPEAT\", \"REPLACE\", \"REVERSE\", \"RIGHT\", \"ROUND\", \"ROW_COUNT\", \"RPAD\", \"RTRIM\", \"SCHEMA\", \"SEC_TO_TIME\", \"SECOND\", \"SESSION_USER\", \"SHA1\",\n        \"SHA\", \"SHA2\", \"SIGN\", \"SIN\", \"SLEEP\", \"SOUNDEX\", \"SPACE\", \"SQRT\", \"SRID\", \"ST_Area\", \"ST_AsBinary\", \"ST_AsWKB\", \"ST_AsGeoJSON\", \"ST_AsText\",\n        \"ST_AsWKT\", \"ST_Buffer\", \"ST_Buffer_Strategy\", \"ST_Centroid\", \"ST_Contains\", \"ST_ConvexHull\", \"ST_Crosses\", \"ST_Difference\", \"ST_Dimension\",\n        \"ST_Disjoint\", \"ST_Distance\", \"ST_Distance_Sphere\", \"ST_EndPoint\", \"ST_Envelope\", \"ST_Equals\", \"ST_ExteriorRing\", \"ST_GeoHash\",\n        \"ST_GeomCollFromText\", \"ST_GeometryCollectionFromText\", \"ST_GeomCollFromTxt\", \"ST_GeomCollFromWKB\", \"ST_GeometryCollectionFromWKB\",\n        \"ST_GeometryN\", \"ST_GeometryType\", \"ST_GeomFromGeoJSON\", \"ST_GeomFromText\", \"ST_GeometryFromText\", \"ST_GeomFromWKB\", \"ST_GeometryFromWKB\",\n        \"ST_InteriorRingN\", \"ST_Intersection\", \"ST_Intersects\", \"ST_IsClosed\", \"ST_IsEmpty\", \"ST_IsSimple\", \"ST_IsValid\", \"ST_LatFromGeoHash\",\n        \"ST_Length\", \"ST_LineFromText\", \"ST_LineStringFromText\", \"ST_LineFromWKB\", \"ST_LineStringFromWKB\", \"ST_LongFromGeoHash\", \"ST_MakeEnvelope\",\n        \"ST_MLineFromText\", \"ST_MultiLineStringFromText\", \"ST_MLineFromWKB\", \"ST_MultiLineStringFromWKB\", \"ST_MPointFromText\", \"ST_MultiPointFromText\",\n        \"ST_MPointFromWKB\", \"ST_MultiPointFromWKB\", \"ST_MPolyFromText\", \"ST_MultiPolygonFromText\", \"ST_MPolyFromWKB\", \"ST_MultiPolygonFromWKB\",\n        \"ST_NumGeometries\", \"ST_NumInteriorRing\", \"ST_NumInteriorRings\", \"ST_NumPoints\", \"ST_Overlaps\", \"ST_PointFromGeoHash\", \"ST_PointFromText\",\n        \"ST_PointFromWKB\", \"ST_PointN\", \"ST_PolyFromText\", \"ST_PolygonFromText\", \"ST_PolyFromWKB\", \"ST_PolygonFromWKB\", \"ST_Simplify\", \"ST_SRID\",\n        \"ST_StartPoint\", \"ST_SymDifference\", \"ST_Touches\", \"ST_Union\", \"ST_Validate\", \"ST_Within\", \"ST_X\", \"ST_Y\", \"StartPoint\", \"STD\", \"STDDEV\",\n        \"STDDEV_POP\", \"STDDEV_SAMP\", \"STR_TO_DATE\", \"STRCMP\", \"SUBDATE\", \"SUBSTR\", \"SUBSTRING\", \"SUBSTRING_INDEX\", \"SUBTIME\", \"SUM\", \"SYSDATE\",\n        \"SYSTEM_USER\", \"TAN\", \"TIME\", \"TIME_FORMAT\", \"TIME_TO_SEC\", \"TIMEDIFF\", \"TIMESTAMP\", \"TIMESTAMPADD\", \"TIMESTAMPDIFF\", \"TO_BASE64\", \"TO_DAYS\",\n        \"TO_SECONDS\", \"Touches\", \"TRIM\", \"TRUNCATE\", \"UCASE\", \"UNCOMPRESS\", \"UNCOMPRESSED_LENGTH\", \"UNHEX\", \"UNIX_TIMESTAMP\", \"UpdateXML\", \"UPPER\",\n        \"USER\", \"UTC_DATE\", \"UTC_TIME\", \"UTC_TIMESTAMP\", \"UUID\", \"UUID_SHORT\", \"VALIDATE_PASSWORD_STRENGTH\", \"VALUES\", \"VAR_POP\", \"VAR_SAMP\", \"VARIANCE\",\n        \"VERSION\", \"WAIT_FOR_EXECUTED_GTID_SET\", \"WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS\", \"WEEK\", \"WEEKDAY\", \"WEEKOFYEAR\", \"WEIGHT_STRING\", \"Within\",\n        \"X\", \"Y\", \"YEAR\", \"YEARWEEK\"\n    ],\n    builtinVariables: [],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/--+.*/, 'comment'],\n            [/#+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            // Not supporting nested comments, as nested comments seem to not be standard?\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }],\n        ],\n        stringDouble: [\n            [/[^\"]+/, 'string.double'],\n            [/\"\"/, 'string.double'],\n            [/\"/, { token: 'string.double', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/`/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        quotedIdentifier: [\n            [/[^`]+/, 'identifier'],\n            [/``/, 'identifier'],\n            [/`/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        scopes: []\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js?");

/***/ })

}]);