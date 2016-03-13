/**
 * Created by Administrator on 2015/4/15.
 * 广告管理
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var ConfigSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
    pic6: String,
    pic7: String,
    pic8: String,
    pic9: String,
    pic10: String,
    pic11: String,
    pic12: String,
    pic13: String,
    pic14: String,
    pic15: String,
    pic16: String,
    pic17: String,
    str1: String,
    str2: String,
    str3: String,
    str4: String

});

var Config = mongoose.model("Config", ConfigSchema);

module.exports = Config;

