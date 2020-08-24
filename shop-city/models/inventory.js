module.exports = function(sequelize, DataTypes) {
    const Inventory= sequelize.define("inventory", {
      product_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      seller: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
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