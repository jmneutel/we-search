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
	},
	research_interest: {
	    type: DataTypes.STRING,
	    allowNull: false,
	},
	location:  {
	    type: DataTypes.STRING,
	    allowNull: false,
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
	hours_week: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	},
	available: {
	    type: DataTypes.STRING,
	    allowNull: false,
	},
	university: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	duration: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	field: {
	    type: DataTypes.STRING,
	    allowNull: false   
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
