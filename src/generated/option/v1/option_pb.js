// source: option/v1/option.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.jax.v1.DexValue', null, global);
goog.exportSymbol('proto.jax.v1.ExpirationDateMap', null, global);
goog.exportSymbol('proto.jax.v1.GetDexByStrikesRequest', null, global);
goog.exportSymbol('proto.jax.v1.GetDexRequest', null, global);
goog.exportSymbol('proto.jax.v1.GetDexResponse', null, global);
goog.exportSymbol('proto.jax.v1.OptionTypeMap', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.GetDexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.GetDexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.GetDexRequest.displayName = 'proto.jax.v1.GetDexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.GetDexByStrikesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.GetDexByStrikesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.GetDexByStrikesRequest.displayName = 'proto.jax.v1.GetDexByStrikesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.GetDexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.GetDexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.GetDexResponse.displayName = 'proto.jax.v1.GetDexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.ExpirationDateMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.ExpirationDateMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.ExpirationDateMap.displayName = 'proto.jax.v1.ExpirationDateMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.OptionTypeMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.OptionTypeMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.OptionTypeMap.displayName = 'proto.jax.v1.OptionTypeMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jax.v1.DexValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jax.v1.DexValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jax.v1.DexValue.displayName = 'proto.jax.v1.DexValue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.GetDexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.GetDexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.GetDexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    underlyingAsset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startStrikePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    endStrikePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.GetDexRequest}
 */
proto.jax.v1.GetDexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.GetDexRequest;
  return proto.jax.v1.GetDexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.GetDexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.GetDexRequest}
 */
proto.jax.v1.GetDexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlyingAsset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStartStrikePrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEndStrikePrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.GetDexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.GetDexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.GetDexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnderlyingAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string underlying_asset = 1;
 * @return {string}
 */
proto.jax.v1.GetDexRequest.prototype.getUnderlyingAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jax.v1.GetDexRequest} returns this
 */
proto.jax.v1.GetDexRequest.prototype.setUnderlyingAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double start_strike_price = 2;
 * @return {number}
 */
proto.jax.v1.GetDexRequest.prototype.getStartStrikePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jax.v1.GetDexRequest} returns this
 */
proto.jax.v1.GetDexRequest.prototype.setStartStrikePrice = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.jax.v1.GetDexRequest} returns this
 */
proto.jax.v1.GetDexRequest.prototype.clearStartStrikePrice = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jax.v1.GetDexRequest.prototype.hasStartStrikePrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double end_strike_price = 3;
 * @return {number}
 */
proto.jax.v1.GetDexRequest.prototype.getEndStrikePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jax.v1.GetDexRequest} returns this
 */
proto.jax.v1.GetDexRequest.prototype.setEndStrikePrice = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.jax.v1.GetDexRequest} returns this
 */
proto.jax.v1.GetDexRequest.prototype.clearEndStrikePrice = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jax.v1.GetDexRequest.prototype.hasEndStrikePrice = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.GetDexByStrikesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.GetDexByStrikesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexByStrikesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    underlyingAsset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numStrikes: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.GetDexByStrikesRequest}
 */
proto.jax.v1.GetDexByStrikesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.GetDexByStrikesRequest;
  return proto.jax.v1.GetDexByStrikesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.GetDexByStrikesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.GetDexByStrikesRequest}
 */
proto.jax.v1.GetDexByStrikesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlyingAsset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumStrikes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.GetDexByStrikesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.GetDexByStrikesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexByStrikesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnderlyingAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumStrikes();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string underlying_asset = 1;
 * @return {string}
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.getUnderlyingAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jax.v1.GetDexByStrikesRequest} returns this
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.setUnderlyingAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 num_strikes = 2;
 * @return {number}
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.getNumStrikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.jax.v1.GetDexByStrikesRequest} returns this
 */
proto.jax.v1.GetDexByStrikesRequest.prototype.setNumStrikes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.GetDexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.GetDexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.GetDexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spotPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    strikePricesMap: (f = msg.getStrikePricesMap()) ? f.toObject(includeInstance, proto.jax.v1.ExpirationDateMap.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.GetDexResponse}
 */
proto.jax.v1.GetDexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.GetDexResponse;
  return proto.jax.v1.GetDexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.GetDexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.GetDexResponse}
 */
proto.jax.v1.GetDexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpotPrice(value);
      break;
    case 2:
      var value = msg.getStrikePricesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.jax.v1.ExpirationDateMap.deserializeBinaryFromReader, "", new proto.jax.v1.ExpirationDateMap());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.GetDexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.GetDexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.GetDexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.GetDexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpotPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStrikePricesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.jax.v1.ExpirationDateMap.serializeBinaryToWriter);
  }
};


/**
 * optional double spot_price = 1;
 * @return {number}
 */
proto.jax.v1.GetDexResponse.prototype.getSpotPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jax.v1.GetDexResponse} returns this
 */
proto.jax.v1.GetDexResponse.prototype.setSpotPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * map<string, ExpirationDateMap> strike_prices = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jax.v1.ExpirationDateMap>}
 */
proto.jax.v1.GetDexResponse.prototype.getStrikePricesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jax.v1.ExpirationDateMap>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.jax.v1.ExpirationDateMap));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.jax.v1.GetDexResponse} returns this
 */
proto.jax.v1.GetDexResponse.prototype.clearStrikePricesMap = function() {
  this.getStrikePricesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.ExpirationDateMap.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.ExpirationDateMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.ExpirationDateMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.ExpirationDateMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    expirationDatesMap: (f = msg.getExpirationDatesMap()) ? f.toObject(includeInstance, proto.jax.v1.OptionTypeMap.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.ExpirationDateMap}
 */
proto.jax.v1.ExpirationDateMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.ExpirationDateMap;
  return proto.jax.v1.ExpirationDateMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.ExpirationDateMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.ExpirationDateMap}
 */
proto.jax.v1.ExpirationDateMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getExpirationDatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.jax.v1.OptionTypeMap.deserializeBinaryFromReader, "", new proto.jax.v1.OptionTypeMap());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.ExpirationDateMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.ExpirationDateMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.ExpirationDateMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.ExpirationDateMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpirationDatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.jax.v1.OptionTypeMap.serializeBinaryToWriter);
  }
};


/**
 * map<string, OptionTypeMap> expiration_dates = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jax.v1.OptionTypeMap>}
 */
proto.jax.v1.ExpirationDateMap.prototype.getExpirationDatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jax.v1.OptionTypeMap>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.jax.v1.OptionTypeMap));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.jax.v1.ExpirationDateMap} returns this
 */
proto.jax.v1.ExpirationDateMap.prototype.clearExpirationDatesMap = function() {
  this.getExpirationDatesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.OptionTypeMap.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.OptionTypeMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.OptionTypeMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.OptionTypeMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionTypesMap: (f = msg.getOptionTypesMap()) ? f.toObject(includeInstance, proto.jax.v1.DexValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.OptionTypeMap}
 */
proto.jax.v1.OptionTypeMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.OptionTypeMap;
  return proto.jax.v1.OptionTypeMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.OptionTypeMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.OptionTypeMap}
 */
proto.jax.v1.OptionTypeMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getOptionTypesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.jax.v1.DexValue.deserializeBinaryFromReader, "", new proto.jax.v1.DexValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.OptionTypeMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.OptionTypeMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.OptionTypeMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.OptionTypeMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionTypesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.jax.v1.DexValue.serializeBinaryToWriter);
  }
};


/**
 * map<string, DexValue> option_types = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jax.v1.DexValue>}
 */
proto.jax.v1.OptionTypeMap.prototype.getOptionTypesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jax.v1.DexValue>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.jax.v1.DexValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.jax.v1.OptionTypeMap} returns this
 */
proto.jax.v1.OptionTypeMap.prototype.clearOptionTypesMap = function() {
  this.getOptionTypesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jax.v1.DexValue.prototype.toObject = function(opt_includeInstance) {
  return proto.jax.v1.DexValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jax.v1.DexValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.DexValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jax.v1.DexValue}
 */
proto.jax.v1.DexValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jax.v1.DexValue;
  return proto.jax.v1.DexValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jax.v1.DexValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jax.v1.DexValue}
 */
proto.jax.v1.DexValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jax.v1.DexValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jax.v1.DexValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jax.v1.DexValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jax.v1.DexValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.jax.v1.DexValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jax.v1.DexValue} returns this
 */
proto.jax.v1.DexValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


goog.object.extend(exports, proto.jax.v1);
