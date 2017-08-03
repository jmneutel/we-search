module.exports = function(sequelize, DataTypes) {
 var StudentForm = sequelize.define("StudentForm", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	gpa: {
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
	move: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	achieve: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	duration: {
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
	university: {
	    type: DataTypes.STRING,
	    allowNull: false
	},

	university_switch: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	year: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	major: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	resume: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	},
	cover_letter: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	}, 
	uuid: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	}
    }, {      
	classMethods: {
            associate: function(model) {
		Form.hasOne(model.Student, {
		});
            }
	}
    });			     
    return StudentForm;
};
