module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define("Movie", {
        movie_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Movie;
  };
  