module.exports = function(sequelize, DataTypes) {
    const Inventory= sequelize.define("inventory", {
      product_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      seller: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 2000]
        }
      },
      timeFrame: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      postedDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      }
    });
    return Inventory;
  };