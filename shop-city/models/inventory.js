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
        type: DataTypes.DECIMAL,
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
      product_condition: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 4]
        }
      },
      details: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 2000]
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