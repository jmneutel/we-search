module.exports = function(sequelize, DataTypes) {
    var ProfForm = sequelize.define("ProfForm", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	min_gpa: {
	    type: DataTypes.INTEGER,
	    allowNull: false,
	    validate: {
		len: [4]
	    }
	},
	research_interest: {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len: [5]
	    }
	},
	live:  {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len:[3]
	    }
	},
	student_achieve: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	long_distance: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	career: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	look_student: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	hours_week: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	},
	available: {
	    type: DataTypes.BOOLEAN,
	    allowNull: false,
	    defaultValue: true
	},
	cv: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	},
     	uuid: {
	    type: DataTypes.INTEGER
	}
    }, {      
	classMethods: {
            associate: function(model) {
		Form.hasOne(model.Student, {
		});
            }
	}
    });			     
    return ProfForm;
};
