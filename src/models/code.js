module.exports = (sequelize, DataTypes) => {
  
  const { STRING, BOOLEAN } = DataTypes

  return sequelize.define('code', {
    'account': STRING(20),
    'timestamp': STRING(135),
    'used': BOOLEAN,
    'code': STRING(20),
  })
}
