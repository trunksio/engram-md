var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CacheManager: () => CacheManager,
  LogLevel: () => LogLevel,
  LoggerWithoutDebug: () => LoggerWithoutDebug,
  Model: () => Model,
  ModelManager: () => ModelManager,
  ModelValidationStatus: () => ModelValidationStatus,
  POLYFILL_ETAG: () => POLYFILL_ETAG,
  Wllama: () => Wllama,
  WllamaAbortError: () => WllamaAbortError,
  WllamaError: () => WllamaError,
  WllamaRuntimeError: () => WllamaRuntimeError,
  getHFFileSHA256: () => getHFFileSHA256,
  getHFModelSource: () => getHFModelSource,
  isValidGgufFile: () => isValidGgufFile
});
module.exports = __toCommonJS(index_exports);

// src/glue/messages.ts
var GLUE_VERSION = 1;
var GLUE_MESSAGE_PROTOTYPES = {
  "erro_evt": {
    "name": "erro_evt",
    "structName": "glue_msg_error",
    "className": "GlueMsgError",
    "fields": [
      {
        "type": "str",
        "name": "message",
        "isNullable": false
      }
    ]
  },
  "load_req": {
    "name": "load_req",
    "structName": "glue_msg_load_req",
    "className": "GlueMsgLoadReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "model_paths",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "mmproj_path",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "n_ctx_auto",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mmap",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mlock",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_gpu_layers",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_threads",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "model_alias",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "log_level",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "embeddings",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "offload_kqv",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_parallel",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "pooling_type",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "rope_scaling_type",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_base",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_scale",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_ext_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_attn_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_fast",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_slow",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "yarn_orig_ctx",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_k",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_v",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "kv_unified",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "flash_attn",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "swa_full",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ctx_checkpoints",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "checkpoint_min_step",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "chat_template",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "jinja",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_vals",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "reasoning",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_min_tokens",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_max_tokens",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "warmup",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "no_kv_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "mmproj_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cont_batching",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_keep",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "ctx_shift",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cache_idle_slots",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_cache_reuse",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "lora_paths",
        "isNullable": true
      },
      {
        "type": "arr_float",
        "name": "lora_scales",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "lora_init_without_apply",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "engram_path",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "spec_draft_model",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_ngl",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_max",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_min",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "spec_draft_p_min",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads_batch",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_vals",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "reasoning_budget_tokens",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_budget_message",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_format",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "skip_chat_parsing",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "prefill_assistant",
        "isNullable": true
      }
    ]
  },
  "load_res": {
    "name": "load_res",
    "structName": "glue_msg_load_res",
    "className": "GlueMsgLoadRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_vocab",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx_train",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_embd",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_layer",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_key",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_val",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_bos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eot",
        "isNullable": false
      },
      {
        "type": "arr_int",
        "name": "list_tokens_eog",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_bos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_eos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_encoder",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_decoder_start",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "media_marker",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_image_input",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_audio_input",
        "isNullable": false
      }
    ]
  },
  "cmpl_req": {
    "name": "cmpl_req",
    "structName": "glue_msg_completion_req",
    "className": "GlueMsgCompletionReq",
    "fields": [
      {
        "type": "bool",
        "name": "is_chat",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "cmpl_res": {
    "name": "cmpl_res",
    "structName": "glue_msg_completion_res",
    "className": "GlueMsgCompletionRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  },
  "embd_req": {
    "name": "embd_req",
    "structName": "glue_msg_embedding_req",
    "className": "GlueMsgEmbeddingReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "embd_res": {
    "name": "embd_res",
    "structName": "glue_msg_embedding_res",
    "className": "GlueMsgEmbeddingRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  },
  "rrnk_req": {
    "name": "rrnk_req",
    "structName": "glue_msg_rerank_req",
    "className": "GlueMsgRerankReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "rrnk_res": {
    "name": "rrnk_res",
    "structName": "glue_msg_rerank_res",
    "className": "GlueMsgRerankRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  },
  "gres_req": {
    "name": "gres_req",
    "structName": "glue_msg_get_result_req",
    "className": "GlueMsgGetResultReq",
    "fields": []
  },
  "gres_res": {
    "name": "gres_res",
    "structName": "glue_msg_get_result_res",
    "className": "GlueMsgGetResultRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_more",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "is_error",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "engr_req": {
    "name": "engr_req",
    "structName": "glue_msg_engram_set_req",
    "className": "GlueMsgEngramSetReq",
    "fields": [
      {
        "type": "str",
        "name": "path",
        "isNullable": true
      }
    ]
  },
  "engr_res": {
    "name": "engr_res",
    "structName": "glue_msg_engram_set_res",
    "className": "GlueMsgEngramSetRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "message",
        "isNullable": false
      }
    ]
  },
  "engs_req": {
    "name": "engs_req",
    "structName": "glue_msg_engram_signal_req",
    "className": "GlueMsgEngramSignalReq",
    "fields": [
      {
        "type": "bool",
        "name": "reset",
        "isNullable": false
      }
    ]
  },
  "engs_res": {
    "name": "engs_res",
    "structName": "glue_msg_engram_signal_res",
    "className": "GlueMsgEngramSignalRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "float",
        "name": "sig_mean",
        "isNullable": false
      },
      {
        "type": "float",
        "name": "sig_max",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "sig_count",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "trace_stride",
        "isNullable": false
      },
      {
        "type": "arr_float",
        "name": "trace",
        "isNullable": false
      }
    ]
  },
  "tbop_req": {
    "name": "tbop_req",
    "structName": "glue_msg_test_backend_ops_req",
    "className": "GlueMsgTestBackendOpsReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "args",
        "isNullable": false
      }
    ]
  },
  "tbop_res": {
    "name": "tbop_res",
    "structName": "glue_msg_test_backend_ops_res",
    "className": "GlueMsgTestBackendOpsRes",
    "fields": [
      {
        "type": "int",
        "name": "retcode",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  }
};

// src/glue/glue.ts
var GLUE_MAGIC = new Uint8Array([71, 76, 85, 69]);
var GLUE_DTYPE_NULL = 0;
var GLUE_DTYPE_BOOL = 1;
var GLUE_DTYPE_INT = 2;
var GLUE_DTYPE_FLOAT = 3;
var GLUE_DTYPE_STRING = 4;
var GLUE_DTYPE_RAW = 5;
var GLUE_DTYPE_ARRAY_BOOL = 6;
var GLUE_DTYPE_ARRAY_INT = 7;
var GLUE_DTYPE_ARRAY_FLOAT = 8;
var GLUE_DTYPE_ARRAY_STRING = 9;
var GLUE_DTYPE_ARRAY_RAW = 10;
var TYPE_MAP = {
  str: GLUE_DTYPE_STRING,
  int: GLUE_DTYPE_INT,
  float: GLUE_DTYPE_FLOAT,
  bool: GLUE_DTYPE_BOOL,
  raw: GLUE_DTYPE_RAW,
  arr_str: GLUE_DTYPE_ARRAY_STRING,
  arr_int: GLUE_DTYPE_ARRAY_INT,
  arr_float: GLUE_DTYPE_ARRAY_FLOAT,
  arr_bool: GLUE_DTYPE_ARRAY_BOOL,
  arr_raw: GLUE_DTYPE_ARRAY_RAW,
  null: GLUE_DTYPE_NULL
};
function glueDeserialize(buf) {
  let offset = 0;
  const view = new DataView(buf.buffer);
  const readUint32 = () => {
    const value = view.getUint32(offset, true);
    offset += 4;
    return value;
  };
  const readInt32 = () => {
    const value = view.getInt32(offset, true);
    offset += 4;
    return value;
  };
  const readFloat = () => {
    const value = view.getFloat32(offset, true);
    offset += 4;
    return value;
  };
  const readBool = () => {
    return readUint32() !== 0;
  };
  const readString = (customLen) => {
    const length = customLen != null ? customLen : readUint32();
    const value = new TextDecoder().decode(buf.slice(offset, offset + length));
    offset += length;
    return value;
  };
  const readRaw = () => {
    const length = readUint32();
    const value = buf.slice(offset, offset + length);
    offset += length;
    return value;
  };
  const readArray = (readItem) => {
    const length = readUint32();
    const value = new Array(length);
    for (let i = 0; i < length; i++) {
      value[i] = readItem();
    }
    return value;
  };
  const readNull = () => null;
  const readField = (field) => {
    switch (field.type) {
      case "str":
        return readString();
      case "int":
        return readInt32();
      case "float":
        return readFloat();
      case "bool":
        return readBool();
      case "raw":
        return readRaw();
      case "arr_str":
        return readArray(readString);
      case "arr_int":
        return readArray(readInt32);
      case "arr_float":
        return readArray(readFloat);
      case "arr_bool":
        return readArray(readBool);
      case "arr_raw":
        return readArray(readRaw);
      case "null":
        return readNull();
    }
  };
  const magicValid = buf[0] === GLUE_MAGIC[0] && buf[1] === GLUE_MAGIC[1] && buf[2] === GLUE_MAGIC[2] && buf[3] === GLUE_MAGIC[3];
  offset += 4;
  if (!magicValid) {
    throw new Error("Invalid magic number");
  }
  const version = readUint32();
  if (version !== GLUE_VERSION) {
    throw new Error("Invalid version number");
  }
  const name = readString(8);
  const msgProto = GLUE_MESSAGE_PROTOTYPES[name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${name}`);
  }
  const output = { _name: name };
  for (const field of msgProto.fields) {
    const readType = readUint32();
    if (readType === GLUE_DTYPE_NULL) {
      if (!field.isNullable) {
        throw new Error(
          `${name}: Expect field ${field.name} to be non-nullable`
        );
      }
      output[field.name] = null;
      continue;
    }
    if (readType !== TYPE_MAP[field.type]) {
      throw new Error(
        `${name}: Expect field ${field.name} to have type ${field.type}`
      );
    }
    output[field.name] = readField(field);
  }
  return output;
}
function glueSerialize(msg) {
  const msgProto = GLUE_MESSAGE_PROTOTYPES[msg._name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${msg._name}`);
  }
  const bufs = [];
  const writeUint32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setUint32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeInt32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setInt32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeFloat = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setFloat32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeBool = (value) => {
    writeUint32(value ? 1 : 0);
  };
  const writeString = (value) => {
    const utf8 = new TextEncoder().encode(value);
    writeUint32(utf8.byteLength);
    bufs.push(utf8);
  };
  const writeRaw = (value) => {
    writeUint32(value.byteLength);
    bufs.push(value);
  };
  const writeArray = (value, writeItem) => {
    writeUint32(value.length);
    for (const item of value) {
      writeItem(item);
    }
  };
  const writeNull = () => {
  };
  bufs.push(GLUE_MAGIC);
  writeUint32(GLUE_VERSION);
  {
    const utf8 = new TextEncoder().encode(msg._name);
    bufs.push(utf8);
  }
  for (const field of msgProto.fields) {
    const val = msg[field.name];
    if (!field.isNullable && (val === null || val === void 0)) {
      throw new Error(
        `${msg._name}: Expect field ${field.name} to be non-nullable`
      );
    }
    if (val === null || val === void 0) {
      writeUint32(GLUE_DTYPE_NULL);
      continue;
    }
    writeUint32(TYPE_MAP[field.type]);
    switch (field.type) {
      case "str":
        writeString(val);
        break;
      case "int":
        writeInt32(val);
        break;
      case "float":
        writeFloat(val);
        break;
      case "bool":
        writeBool(val);
        break;
      case "raw":
        writeRaw(val);
        break;
      case "arr_str":
        writeArray(val, writeString);
        break;
      case "arr_int":
        writeArray(val, writeInt32);
        break;
      case "arr_float":
        writeArray(val, writeFloat);
        break;
      case "arr_bool":
        writeArray(val, writeBool);
        break;
      case "arr_raw":
        writeArray(val, writeRaw);
        break;
      case "null":
        writeNull();
        break;
    }
  }
  const totalLength = bufs.reduce((acc, buf) => acc + buf.byteLength, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;
  for (const buf of bufs) {
    output.set(buf, offset);
    offset += buf.byteLength;
  }
  return output;
}

// src/wasm/source-map.ts
var WASM_SOURCE_MAP = {
  "default": "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",
  "compat": "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"
};

// src/debug.ts
var cache = /* @__PURE__ */ new Map();
function loadMap(buildKey) {
  return __async(this, null, function* () {
    if (cache.has(buildKey)) return cache.get(buildKey);
    const b64 = WASM_SOURCE_MAP[buildKey];
    if (!b64) throw new Error(`No source map for build "${buildKey}"`);
    const gzipped = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const ds = new DecompressionStream("gzip");
    const writer = ds.writable.getWriter();
    writer.write(gzipped);
    writer.close();
    const buf = yield new Response(ds.readable).arrayBuffer();
    const dv = new DataView(buf);
    const bytes = new Uint8Array(buf);
    const firstId = dv.getUint32(0, true);
    const funcCount = dv.getUint32(4, true);
    const numNames = dv.getUint32(8, true);
    const td = new TextDecoder();
    const names = [];
    let pos = 12;
    for (let i = 0; i < numNames; i++) {
      const len = bytes[pos++];
      names.push(td.decode(bytes.subarray(pos, pos + len)));
      pos += len;
    }
    const funcNames = [];
    for (let i = 0; i < funcCount; i++) {
      const idx = dv.getUint16(pos, true);
      pos += 2;
      funcNames.push(idx === 65535 ? null : names[idx]);
    }
    const entry = { firstId, funcNames };
    cache.set(buildKey, entry);
    return entry;
  });
}
var Debug = {
  /**
   * Resolves a list of wasm function indices to their cleaned symbol names.
   */
  decodeFuncIds: (funcIds, isCompatBuild) => __async(void 0, null, function* () {
    const buildKey = isCompatBuild ? "compat" : "default";
    const { firstId, funcNames } = yield loadMap(buildKey);
    return funcIds.map((funcId) => {
      const i = funcId - firstId;
      const name = i >= 0 && i < funcNames.length && funcNames[i] ? funcNames[i] : "(unknown)";
      return { funcId, name };
    });
  }),
  /**
   * Annotates a wasm stack trace string with resolved function names.
   *
   * Example input from Chrome:
   *   at http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[775]:0x74251
   *   at async blob:http://localhost:8080/53a863cc-7227-45cc-8594-ddbbf5257f20:317:28
   *
   * Example input from Firefox:
   *   @http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[796]:0x7dfe2
   *       at wModuleInit/WebAssembly.promising/< (9b6a2acd-d909-44e2-b021-d42fb9087cfb:15:32) index.js:1433:45
   *
   * Example input from Safari:
   *   2441@wasm-function[2441]
   *       at wrapper (d746f19e-4523-4f36-ba06-d0969acc0b05:22:126009)
   *
   * Example output:
   *   wasm-func[775] (server_response::send)
   */
  decodeStackTrace: (stack, isCompatBuild) => __async(void 0, null, function* () {
    const re = /wasm-function\[(\d+)\]/g;
    const funcIds = [
      ...new Set([...stack.matchAll(re)].map((m) => parseInt(m[1])))
    ];
    if (funcIds.length === 0) return stack;
    const resolved = yield Debug.decodeFuncIds(funcIds, isCompatBuild);
    return resolved.map((r) => {
      if (r.name === "(unknown)") {
        return `    wasm-func[${r.funcId}] (unknown)`;
      }
      return `    wasm-func[${r.funcId}] (${r.name})`;
    }).join("\n");
  })
};

// src/utils.ts
var textDecoder = new TextDecoder();
var URL_PARTS_REGEX = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
var parseShardNumber = (fnameOrUrl) => {
  const matches = fnameOrUrl.match(URL_PARTS_REGEX);
  if (!matches) {
    return {
      baseURL: fnameOrUrl,
      current: 1,
      total: 1
    };
  } else {
    return {
      baseURL: fnameOrUrl.replace(URL_PARTS_REGEX, ""),
      current: parseInt(matches[1]),
      total: parseInt(matches[2])
    };
  }
};
var sortFileByShard = (blobs) => {
  const isFiles = blobs.every((b) => !!b.name);
  if (isFiles && blobs.length > 1) {
    const files = blobs;
    files.sort((a, b) => {
      const infoA = parseShardNumber(a.name);
      const infoB = parseShardNumber(b.name);
      return infoA.current - infoB.current;
    });
  }
};
var isMmproj = (blob) => __async(void 0, null, function* () {
  const META_NAME = "general.architecture";
  const META_VAL = "clip";
  const tmp = blob.slice(0, 128 * 1024);
  const header = yield tmp.arrayBuffer();
  const buf = new Uint8Array(header);
  const nameBytes = new TextEncoder().encode(META_NAME);
  const valBytes = new TextEncoder().encode(META_VAL);
  let offset = -1;
  outer: for (let i = 0; i <= buf.length - nameBytes.length; i++) {
    for (let j = 0; j < nameBytes.length; j++) {
      if (buf[i + j] !== nameBytes[j]) continue outer;
    }
    offset = i;
    break;
  }
  if (offset === -1) return false;
  if (offset + 8 * 4 + 4 > buf.length) return false;
  const view = new DataView(header);
  const valLen = view.getBigUint64(offset + 8 * 3, true);
  if (valLen !== /* @__PURE__ */ BigInt("4")) return false;
  for (let i = 0; i < valBytes.length; i++) {
    if (buf[offset + 8 * 4 + i] !== valBytes[i]) return false;
  }
  return true;
});
var absoluteUrl = (relativePath) => new URL(relativePath, document.baseURI).href;
var padDigits = (number, digits) => {
  return Array(Math.max(digits - String(number).length + 1, 0)).join("0") + number;
};
var sumArr = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
var isString = (value) => !!(value == null ? void 0 : value.startsWith);
var MMPROJ_FILE_NAME = "mmproj.gguf";
var loraFileName = (i) => `lora-${padDigits(i + 1, 5)}.gguf`;
var engramFileName = (i) => `engram-${padDigits(i + 1, 5)}.gguf`;
var prepareBlobs = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (blobsInp, loraBlobs = [], engramBlobs = []) {
  const blobs = [];
  let blobMmproj = null;
  for (const blob of blobsInp) {
    if (yield isMmproj(blob)) {
      blobMmproj = blob;
    } else {
      blobs.push(blob);
    }
  }
  sortFileByShard(blobs);
  const result = blobs.map((blob, i) => ({
    blob,
    name: `model-${padDigits(i + 1, 5)}-of-${padDigits(blobs.length, 5)}.gguf`
  }));
  if (blobMmproj) {
    result.push({
      blob: blobMmproj,
      name: MMPROJ_FILE_NAME
    });
  }
  const lora = loraBlobs.map((blob, i) => ({
    blob,
    name: loraFileName(i)
  }));
  result.push(...lora);
  const engram = engramBlobs.map((blob, i) => ({
    blob,
    name: engramFileName(i)
  }));
  result.push(...engram);
  return {
    llm: result.filter(
      (f) => f.name !== MMPROJ_FILE_NAME && !lora.includes(f) && !engram.includes(f)
    ),
    mmproj: blobMmproj ? { blob: blobMmproj, name: MMPROJ_FILE_NAME } : null,
    lora,
    engram,
    all: result
  };
});
var isSupportMultiThread = () => ((e) => __async(void 0, null, function* () {
  try {
    return "undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch (e2) {
    return false;
  }
}))(
  new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    2,
    1,
    0,
    5,
    4,
    1,
    3,
    1,
    1,
    10,
    11,
    1,
    9,
    0,
    65,
    0,
    254,
    16,
    2,
    0,
    26,
    11
  ])
);
var isSupportExceptions = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      4,
      1,
      96,
      0,
      0,
      3,
      2,
      1,
      0,
      10,
      8,
      1,
      6,
      0,
      6,
      64,
      25,
      11,
      11
    ])
  );
});
var isSupportSIMD = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      5,
      1,
      96,
      0,
      1,
      123,
      3,
      2,
      1,
      0,
      10,
      10,
      1,
      8,
      0,
      65,
      0,
      253,
      15,
      253,
      98,
      11
    ])
  );
});
var isSupportJSPI = () => {
  return !!WebAssembly.Suspending;
};
var isSupportWebGPU = () => {
  return !!navigator.gpu;
};
var isSupportMem64 = () => {
  try {
    new WebAssembly.Memory({
      address: "i64",
      initial: /* @__PURE__ */ BigInt("1")
      // 1 page (64 KiB)
    });
    return true;
  } catch (e) {
    return false;
  }
};
var checkEnvironmentCompatible = () => __async(void 0, null, function* () {
  if (!(yield isSupportExceptions())) {
    throw new Error("WebAssembly runtime does not support exception handling");
  }
  if (!(yield isSupportSIMD())) {
    throw new Error("WebAssembly runtime does not support SIMD");
  }
});
var isFirefox = () => {
  return !!navigator.userAgent.match(/Firefox\/([0-9\.]+)(?:\s|$)/);
};
var GGUF_FILE_REGEX = /^.*\.gguf(?:\?.*)?$/;
var isValidGgufFile = (path) => {
  return GGUF_FILE_REGEX.test(path);
};
var isSafariMobile = () => {
  return !!navigator.userAgent.match(/Version\/([0-9\._]+).*Mobile.*Safari.*/);
};
var createWorker = (workerCode) => {
  const workerURL = URL.createObjectURL(
    isString(workerCode) ? new Blob([workerCode], { type: "text/javascript" }) : workerCode
  );
  return new Worker(workerURL, { type: "module" });
};
var cbToAsyncIter = (fn) => (...args) => {
  let values = [];
  let resolve;
  let reject;
  values.push(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    })
  );
  fn(...args, (val, done, err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve([val, done]);
    values.push(
      new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      })
    );
  });
  return function() {
    return __asyncGenerator(this, null, function* () {
      let val;
      for (let i = 0, done = false; !done; i++) {
        [val, done] = yield new __await(values[i]);
        delete values[i];
        if (val !== void 0) yield val;
      }
    });
  }();
};
var canUseAsyncFileRead = (compat) => isSupportJSPI() || compat;
var needCompat = () => !isSupportJSPI() || !isSupportMem64();

// src/workers-code/generated.ts
var LIBLLAMA_VERSION = "b9642-fb847b9";
var LLAMA_CPP_WORKER_CODE = "// Start the main llama.cpp\nlet wllamaMalloc;\nlet wllamaStart;\nlet wllamaAction;\nlet wllamaExit;\nlet wllamaDebug;\n\nlet Module = null;\nlet isCompat = false;\nlet lastStack = '';\nlet isAborted = false;\nlet hasMultithread = false;\n\n//////////////////////////////////////////////////////////////\n// UTILS\n//////////////////////////////////////////////////////////////\n\n// send message back to main thread\nconst msg = (data, transfer) => postMessage(data, transfer);\n\n// Convert CPP log into JS log\nconst cppLogToJSLog = (line) => {\n  const matched = line.match(/@@(DEBUG|INFO|WARN|ERROR)@@(.*)/);\n  return !!matched\n    ? {\n        level: (matched[1] === 'INFO' ? 'debug' : matched[1]).toLowerCase(),\n        text: matched[2],\n      }\n    : { level: 'log', text: line };\n};\n\nconst getHeapU8 = () => {\n  const buffer = Module.wasmMemory.buffer;\n  return new Uint8Array(buffer);\n};\n\nconst toSizeT = (num) => {\n  return isCompat ? Number(num) : BigInt(num);\n};\n\n// Get module config that forwards stdout/err to main thread\nconst getWModuleConfig = (_argMainScriptBlob) => {\n  var pathConfig = RUN_OPTIONS.pathConfig;\n  var pthreadPoolSize = RUN_OPTIONS.nbThread;\n  var argMainScriptBlob = _argMainScriptBlob;\n\n  isCompat = RUN_OPTIONS.compat;\n  hasMultithread = pthreadPoolSize > 1;\n\n  msg({\n    verb: 'console.debug',\n    args: [\n      `Multithread enabled: ${hasMultithread}, pthreadPoolSize: ${pthreadPoolSize}`,\n    ],\n  });\n\n  if (!pathConfig['wllama.wasm']) {\n    throw new Error('\"wllama.wasm\" is missing in pathConfig');\n  }\n  return {\n    noInitialRun: true,\n    print: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      msg({ verb: 'console.log', args: [text] });\n    },\n    printErr: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      if (text.startsWith('@@STACK@@')) {\n        lastStack = text.slice('@@STACK@@'.length);\n        return;\n      }\n      const logLine = cppLogToJSLog(text);\n      msg({ verb: 'console.' + logLine.level, args: [logLine.text] });\n    },\n    locateFile: function (filename, basePath) {\n      const p = pathConfig[filename];\n      const truncate = (str) =>\n        str.length > 128 ? `${str.substr(0, 128)}...` : str;\n      if (filename.match(/wllama\\.worker\\.js/)) {\n        msg({\n          verb: 'console.error',\n          args: [\n            '\"wllama.worker.js\" is removed from v2.2.1. Hint: make sure to clear browser\\'s cache.',\n          ],\n        });\n      } else {\n        msg({\n          verb: 'console.debug',\n          args: [`Loading \"${filename}\" from \"${truncate(p)}\"`],\n        });\n        return p;\n      }\n    },\n    mainScriptUrlOrBlob: hasMultithread\n      ? argMainScriptBlob\n      : 'throw new Error(\"Multithreading is not enabled\")',\n    pthreadPoolSize: hasMultithread ? pthreadPoolSize : 0,\n    wasmMemory: hasMultithread ? getWasmMemory() : null,\n    onAbort: function (message) {\n      isAborted = true;\n      msg({ verb: 'signal.abort', args: ['abort', message, lastStack, null] });\n    },\n    onExit: function (code) {\n      isAborted = true;\n      const callstack = new Error().stack.toString();\n      msg({\n        verb: 'signal.abort',\n        args: ['abort', 'exit(' + code + ')', callstack, null],\n      });\n    },\n  };\n};\n\n// Get the memory to be used by wasm. (Only used in multi-thread mode)\n// Because we have a weird OOM issue on iOS, we need to try some values\n// See: https://github.com/emscripten-core/emscripten/issues/19144\n//      https://github.com/godotengine/godot/issues/70621\nconst getWasmMemory = () => {\n  let minBytes = 128 * 1024 * 1024;\n  let maxBytes = 4096 * 1024 * 1024;\n  let stepBytes = 128 * 1024 * 1024;\n  while (maxBytes > minBytes) {\n    try {\n      const wasmMemory = new WebAssembly.Memory({\n        initial: toSizeT(minBytes / 65536),\n        maximum: toSizeT(maxBytes / 65536),\n        shared: true,\n        address: isCompat ? undefined : 'i64',\n      });\n      return wasmMemory;\n    } catch (e) {\n      maxBytes -= stepBytes;\n      continue; // retry\n    }\n  }\n  throw new Error('Cannot allocate WebAssembly.Memory');\n};\n\n//////////////////////////////////////////////////////////////\n// HEAPFS PATCH\n//////////////////////////////////////////////////////////////\n\n/**\n * By default, emscripten uses memfs. The way it works is by\n * allocating new Uint8Array in javascript heap. This is not good\n * because it requires files to be copied to wasm heap each time\n * a file is read.\n *\n * HeapFS is an alternative, which resolves this problem by\n * allocating space for file directly inside wasm heap. This\n * allows us to mmap without doing any copy.\n *\n * For llama.cpp, this is great because we use MAP_SHARED\n *\n * Ref: https://github.com/ngxson/wllama/pull/39\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/src/library_memfs.js\n *\n * Note 29/05/2024 @ngxson\n * Due to ftell() being limited to MAX_LONG, we cannot load files bigger than 2^31 bytes (or 2GB)\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/system/lib/libc/musl/src/stdio/ftell.c\n */\n\nconst fsNameToFile = {}; // map Name => File\nconst fsIdToFile = {}; // map ID => File\nlet currFileId = 0;\n\n// Patch and redirect memfs calls to wllama\nconst patchHeapFS = () => {\n  const m = Module;\n  // save functions\n  m.MEMFS.stream_ops._read = m.MEMFS.stream_ops.read;\n  m.MEMFS.stream_ops._write = m.MEMFS.stream_ops.write;\n  m.MEMFS.stream_ops._llseek = m.MEMFS.stream_ops.llseek;\n  m.MEMFS.stream_ops._allocate = m.MEMFS.stream_ops.allocate;\n  m.MEMFS.stream_ops._mmap = m.MEMFS.stream_ops.mmap;\n  m.MEMFS.stream_ops._msync = m.MEMFS.stream_ops.msync;\n\n  const patchStream = (stream) => {\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const ptr = Number(f.ptr);\n      stream.node.contents = getHeapU8().subarray(ptr, ptr + f.size);\n      stream.node.usedBytes = f.size;\n    }\n  };\n\n  // replace \"read\" functions\n  m.MEMFS.stream_ops.read = function (\n    stream,\n    buffer,\n    offset,\n    length,\n    position\n  ) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._read(stream, buffer, offset, length, position);\n  };\n  m.MEMFS.ops_table.file.stream.read = m.MEMFS.stream_ops.read;\n\n  // replace \"llseek\" functions\n  m.MEMFS.stream_ops.llseek = function (stream, offset, whence) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._llseek(stream, offset, whence);\n  };\n  m.MEMFS.ops_table.file.stream.llseek = m.MEMFS.stream_ops.llseek;\n\n  // replace \"mmap\" functions\n  m.MEMFS.stream_ops.mmap = function (stream, length, position, prot, flags) {\n    patchStream(stream);\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const mmapPtr = f.ptr + toSizeT(position);\n      return {\n        ptr: mmapPtr,\n        allocated: false,\n      };\n    } else {\n      return m.MEMFS.stream_ops._mmap(stream, length, position, prot, flags);\n    }\n  };\n  m.MEMFS.ops_table.file.stream.mmap = m.MEMFS.stream_ops.mmap;\n\n  // mount FS\n  m.FS.mkdir('/models');\n  m.FS.mount(m.MEMFS, { root: '.' }, '/models');\n};\n\n// Allocate a new file in wllama heapfs, returns file ID\nconst heapfsAlloc = (name, size, allocBuffer) => {\n  if (size < 1) {\n    throw new Error('File size must be bigger than 0');\n  }\n  const m = Module;\n  const ptr = toSizeT(allocBuffer ? m.mmapAlloc(size) : 0);\n  const file = {\n    ptr: ptr,\n    size: size,\n    id: currFileId++,\n  };\n  fsIdToFile[file.id] = file;\n  fsNameToFile[name] = file;\n  return file.id;\n};\n\n// Add new file to wllama heapfs, return number of written bytes\nconst heapfsWrite = (id, buffer, offset) => {\n  if (fsIdToFile[id]) {\n    const { ptr, size } = fsIdToFile[id];\n    const afterWriteByte = offset + buffer.byteLength;\n    if (afterWriteByte > size) {\n      throw new Error(\n        `File ID ${id} write out of bound, afterWriteByte = ${afterWriteByte} while size = ${size}`\n      );\n    }\n    getHeapU8().set(buffer, Number(ptr) + offset);\n    return buffer.byteLength;\n  } else {\n    throw new Error(`File ID ${id} not found in heapfs`);\n  }\n};\n\n//////////////////////////////////////////////////////////////\n// ASYNC FILE READ\n//////////////////////////////////////////////////////////////\n\nlet isAwaitReading = false;\nlet pendingReadPromise = null;\nlet pendingReadResolve = null;\nlet pendingReadReject = null;\n\nconst _stripModelsPrefix = (path) => path.replace(/^\\/?models\\//, '');\n\n// Called from EM_ASYNC_JS stub in wllama-fs.h (path is already a JS string)\nconst _wllama_js_file_read = async (path, offset, req_size, out_ptr) => {\n  const name = _stripModelsPrefix(path);\n\n  pendingReadPromise = new Promise((res, rej) => {\n    pendingReadResolve = res;\n    pendingReadReject = rej;\n  });\n  isAwaitReading = true;\n\n  postMessage({ verb: 'fs.read_req', args: [name, offset, req_size] });\n\n  let data;\n  try {\n    data = await pendingReadPromise;\n  } finally {\n    isAwaitReading = false;\n    pendingReadResolve = null;\n    pendingReadReject = null;\n  }\n\n  const bytes = new Uint8Array(data);\n  getHeapU8().set(bytes, out_ptr);\n  return toSizeT(bytes.length);\n};\n\n//////////////////////////////////////////////////////////////\n// MAIN CODE\n//////////////////////////////////////////////////////////////\n\nconst callWrapper = (name, ret, args, isAsync) => {\n  const fn = Module.cwrap(\n    name,\n    ret,\n    args,\n    isAsync ? { async: true } : undefined\n  );\n  return async (action, req) => {\n    // console.log(`Calling ${name} with action:`, action, 'and req:', req);\n    let result;\n    try {\n      if (args.length === 2) {\n        result = isAsync ? await fn(action, req) : fn(action, req);\n      } else {\n        result = fn();\n      }\n    } catch (ex) {\n      console.error(ex);\n      throw ex;\n    }\n    return result;\n  };\n};\n\nfunction handleError(err) {\n  // If WASM already aborted, onAbort already sent signal.abort; skip to avoid\n  // re-reporting the resulting WebAssembly.RuntimeError as a JS exception.\n  if (isAborted) return;\n\n  const message = err ? err.message || String(err) : 'Unknown error';\n  const stack = err ? err.stack || String(err) : '';\n  msg({\n    verb: 'signal.abort',\n    args: ['exception', message, stack, err],\n  });\n}\n\nonmessage = async (e) => {\n  if (!e.data) return;\n  const { verb, args, callbackId } = e.data;\n\n  // fs.read_res arrives while wasm is JSPI-suspended; resolve the pending promise.\n  if (verb === 'fs.read_res') {\n    if (pendingReadResolve) {\n      pendingReadResolve(args[0]);\n    }\n    return;\n  }\n\n  // Guard: while awaiting a file read, reject any other incoming task.\n  if (isAwaitReading) {\n    if (callbackId) {\n      msg({\n        callbackId,\n        err: 'Worker is suspended waiting for file data (JSPI)',\n      });\n    }\n    return;\n  }\n\n  if (!callbackId) {\n    msg({ verb: 'console.error', args: ['callbackId is required', e.data] });\n    return;\n  }\n\n  if (verb === 'module.init') {\n    const argMainScriptBlob = args[0];\n    const argUseAsyncFile = args[1];\n    try {\n      Module = getWModuleConfig(argMainScriptBlob);\n      Module.preRun = () => {\n        if (argUseAsyncFile) {\n          Module.ENV['USE_ASYNC_FILE'] = '1';\n        }\n      };\n      Module.onRuntimeInitialized = () => {\n        // async call once module is ready\n        // init FS\n        patchHeapFS();\n        // init cwrap\n        const pointer = isCompat ? 'number' : 'bigint';\n        // TODO: note sure why emscripten cannot bind if there is only 1 argument\n        wllamaMalloc = callWrapper('wllama_malloc', pointer, [\n          'number',\n          pointer,\n        ]);\n        wllamaStart = callWrapper('wllama_start', 'string', [], true);\n        wllamaAction = callWrapper(\n          'wllama_action',\n          pointer,\n          ['string', pointer],\n          true\n        );\n        wllamaExit = callWrapper('wllama_exit', 'string', []);\n        wllamaDebug = callWrapper('wllama_debug', 'string', []);\n        msg({ callbackId, result: null });\n      };\n      wModuleInit();\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.alloc') {\n    const argFilename = args[0];\n    const argSize = args[1];\n    const argAllocBuffer = args[2];\n    try {\n      // create blank file\n      const emptyBuffer = new ArrayBuffer(0);\n      Module['FS_createDataFile'](\n        '/models',\n        argFilename,\n        emptyBuffer,\n        true,\n        true,\n        true\n      );\n      // alloc data on heap\n      const fileId = heapfsAlloc(argFilename, argSize, argAllocBuffer);\n      msg({ callbackId, result: { fileId } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.write') {\n    const argFileId = args[0];\n    const argBuffer = args[1];\n    const argOffset = args[2];\n    try {\n      const writtenBytes = heapfsWrite(argFileId, argBuffer, argOffset);\n      msg({ callbackId, result: { writtenBytes } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.start') {\n    try {\n      const result = await wllamaStart();\n      msg({ callbackId, result });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.action') {\n    const argAction = args[0];\n    const argEncodedMsg = args[1];\n    try {\n      const inputPtr = await wllamaMalloc(toSizeT(argEncodedMsg.byteLength), 0);\n      // copy data to wasm heap\n      const inputBuffer = new Uint8Array(\n        getHeapU8().buffer,\n        Number(inputPtr),\n        argEncodedMsg.byteLength\n      );\n      inputBuffer.set(argEncodedMsg, 0);\n      const outputPtr = await wllamaAction(argAction, inputPtr);\n      // length of output buffer is written at the first 4 bytes of input buffer\n      const outputLen = new Uint32Array(\n        getHeapU8().buffer,\n        Number(inputPtr),\n        1\n      )[0];\n      // copy the output buffer to JS heap\n      const outputBuffer = new Uint8Array(outputLen);\n      const outputSrcView = new Uint8Array(\n        getHeapU8().buffer,\n        Number(outputPtr),\n        outputLen\n      );\n      outputBuffer.set(outputSrcView, 0); // copy it\n      msg({ callbackId, result: outputBuffer }, [outputBuffer.buffer]);\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.exit') {\n    try {\n      const result = await wllamaExit();\n      msg({ callbackId, result });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.debug') {\n    try {\n      const result = await wllamaDebug();\n      msg({ callbackId, result });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n};\n";
var OPFS_UTILS_WORKER_CODE = "let accessHandle;\nlet abortController = new AbortController();\n\nasync function openFile(filename) {\n  const opfsRoot = await navigator.storage.getDirectory();\n  const cacheDir = await opfsRoot.getDirectoryHandle('cache', { create: true });\n  const fileHandler = await cacheDir.getFileHandle(filename, { create: true });\n  accessHandle = await fileHandler.createSyncAccessHandle();\n  accessHandle.truncate(0); // clear file content\n}\n\nasync function writeFile(buf) {\n  accessHandle.write(buf);\n}\n\nasync function closeFile() {\n  accessHandle.flush();\n  accessHandle.close();\n}\n\nasync function writeTextFile(filename, str) {\n  await openFile(filename);\n  await writeFile(new TextEncoder().encode(str));\n  await closeFile();\n}\n\nconst throttled = (func, delay) => {\n  let lastRun = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - lastRun > delay) {\n      lastRun = now;\n      func.apply(null, args);\n    }\n  };\n};\n\nconst assertNonNull = (val) => {\n  if (val === null || val === undefined) {\n    throw new Error('OPFS Worker: Assertion failed');\n  }\n};\n\n// respond to main thread\nconst resOK = () => postMessage({ ok: true });\nconst resProgress = (loaded, total) =>\n  postMessage({ progress: { loaded, total } });\nconst resErr = (err) => postMessage({ err });\n\nonmessage = async (e) => {\n  try {\n    if (!e.data) return;\n\n    /**\n     * @param {Object} e.data\n     *\n     * Fine-control FS actions:\n     * - { action: 'open', filename: 'string' }\n     * - { action: 'write', buf: ArrayBuffer }\n     * - { action: 'close' }\n     *\n     * Simple write API:\n     * - { action: 'write-simple', filename: 'string', buf: ArrayBuffer }\n     *\n     * Download API:\n     * - { action: 'download', url: 'string', filename: 'string', options: Object, metadataFileName: 'string' }\n     * - { action: 'download-abort' }\n     */\n    const {\n      action,\n      filename,\n      buf,\n      url,\n      options,\n      metadataFileName,\n      metadataAdditional,\n    } = e.data;\n\n    if (action === 'open') {\n      assertNonNull(filename);\n      await openFile(filename);\n      return resOK();\n    } else if (action === 'write') {\n      assertNonNull(buf);\n      await writeFile(buf);\n      return resOK();\n    } else if (action === 'close') {\n      await closeFile();\n      return resOK();\n    } else if (action === 'write-simple') {\n      assertNonNull(filename);\n      assertNonNull(buf);\n      await openFile(filename);\n      await writeFile(buf);\n      await closeFile();\n      return resOK();\n    } else if (action === 'download') {\n      assertNonNull(url);\n      assertNonNull(filename);\n      assertNonNull(metadataFileName);\n      assertNonNull(options);\n      assertNonNull(options.aborted);\n      abortController = new AbortController();\n      if (options.aborted) abortController.abort();\n      const response = await fetch(url, {\n        ...options,\n        signal: abortController.signal,\n      });\n      const contentLength = response.headers.get('content-length');\n      const etag = (response.headers.get('etag') || '').replace(\n        /[^A-Za-z0-9]/g,\n        ''\n      );\n      const total = parseInt(contentLength, 10);\n      const reader = response.body.getReader();\n      await openFile(filename);\n      let loaded = 0;\n      const throttledProgress = throttled(resProgress, 100);\n      while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        loaded += value.byteLength;\n        await writeFile(value);\n        throttledProgress(loaded, total);\n      }\n      resProgress(total, total); // 100% done\n      await closeFile();\n      // make sure this is in-sync with CacheEntryMetadata\n      await writeTextFile(\n        metadataFileName,\n        JSON.stringify({\n          originalURL: url,\n          originalSize: total,\n          etag,\n          ...metadataAdditional,\n        })\n      );\n      return resOK();\n    } else if (action === 'download-abort') {\n      if (abortController) {\n        abortController.abort();\n      }\n      return;\n    }\n\n    throw new Error('OPFS Worker: Invalid action', e.data);\n  } catch (err) {\n    return resErr(err);\n  }\n};\n";
var WLLAMA_EMSCRIPTEN_CODE = 'var Module=typeof Module!="undefined"?Module:{};var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&self.name?.startsWith("em-pthread");if(ENVIRONMENT_IS_NODE){var worker_threads=require("worker_threads");global.Worker=worker_threads.Worker;ENVIRONMENT_IS_WORKER=!worker_threads.isMainThread;ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&worker_threads["workerData"]=="em-pthread"}var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName=globalThis.document?.currentScript?.src;if(typeof __filename!="undefined"){_scriptName=__filename}else if(ENVIRONMENT_IS_WORKER){_scriptName=self.location.href}var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs");scriptDirectory=__dirname+"/";readBinary=filename=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename);return ret};readAsync=async(filename,binary=true)=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename,binary?undefined:"utf8");return ret};if(process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,"/")}arguments_=process.argv.slice(2);if(typeof module!="undefined"){module["exports"]=Module}quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}if(!ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{if(isFileURI(url)){return new Promise((resolve,reject)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){resolve(xhr.response);return}reject(xhr.status)};xhr.onerror=reject;xhr.send(null)})}var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var defaultPrint=console.log.bind(console);var defaultPrintErr=console.error.bind(console);if(ENVIRONMENT_IS_NODE){var utils=require("util");var stringify=a=>typeof a=="object"?utils.inspect(a):a;defaultPrint=(...args)=>fs.writeSync(1,args.map(stringify).join(" ")+"\\n");defaultPrintErr=(...args)=>fs.writeSync(2,args.map(stringify).join(" ")+"\\n")}var out=defaultPrint;var err=defaultPrintErr;var wasmBinary;var wasmModule;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var isFileURI=filename=>filename.startsWith("file://");function growMemViews(){if(wasmMemory.buffer!=HEAP8.buffer){updateMemoryViews()}}if(ENVIRONMENT_IS_NODE&&ENVIRONMENT_IS_PTHREAD){var parentPort=worker_threads["parentPort"];parentPort.on("message",msg=>global.onmessage?.({data:msg}));Object.assign(globalThis,{self:global,postMessage:msg=>parentPort["postMessage"](msg)});process.on("uncaughtException",err=>{postMessage({cmd:"uncaughtException",error:err});process.exit(1)})}var startWorker;if(ENVIRONMENT_IS_PTHREAD){var initializedJS=false;self.onunhandledrejection=e=>{throw e.reason||e};async function handleMessage(e){try{var msgData=e["data"];var cmd=msgData.cmd;if(cmd==="load"){let messageQueue=[];self.onmessage=e=>messageQueue.push(e);startWorker=()=>{postMessage({cmd:"loaded"});for(let msg of messageQueue){handleMessage(msg)}self.onmessage=handleMessage};for(const handler of msgData.handlers){if(!Module[handler]||Module[handler].proxy){Module[handler]=(...args)=>{postMessage({cmd:"callHandler",handler,args})};if(handler=="print")out=Module[handler];if(handler=="printErr")err=Module[handler]}}wasmMemory=msgData.wasmMemory;updateMemoryViews();wasmModule=msgData.wasmModule;createWasm();run()}else if(cmd==="run"){establishStackSpace(msgData.pthread_ptr);__emscripten_thread_init(msgData.pthread_ptr,0,0,1,0,0);PThread.threadInitTLS();__emscripten_thread_mailbox_await(msgData.pthread_ptr);if(!initializedJS){initializedJS=true}try{await invokeEntryPoint(msgData.start_routine,msgData.arg)}catch(ex){if(ex!="unwind"){throw ex}}}else if(msgData.target==="setimmediate"){}else if(cmd==="checkMailbox"){if(initializedJS){checkMailbox()}}else if(cmd){err(`worker: received unknown command ${cmd}`);err(msgData)}}catch(ex){__emscripten_thread_crashed();throw ex}}self.onmessage=handleMessage}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var HEAP64,HEAPU64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b);HEAP64=new BigInt64Array(b);HEAPU64=new BigUint64Array(b)}function initMemory(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||134217728;wasmMemory=new WebAssembly.Memory({initial:BigInt(INITIAL_MEMORY/65536),maximum:65536n,shared:true,address:"i64"})}updateMemoryViews()}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(ENVIRONMENT_IS_PTHREAD)return startWorker();if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["__wasm_call_ctors"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";if(runtimeInitialized){___trap()}var e=new WebAssembly.RuntimeError(what);throw e}var wasmBinaryFile;function findWasmBinary(){return locateFile("wllama.wasm")}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){assignWasmImports();if(!wasmImports.__instrumented){wasmImports.__instrumented=true;Asyncify.instrumentWasmImports(wasmImports)}var imports={env:wasmImports,wasi_snapshot_preview1:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);wasmExports=applySignatureConversions(wasmExports);registerTLSInit(wasmExports["_emscripten_tls_init"]);assignWasmExports(wasmExports);wasmModule=module;removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){return receiveInstance(result["instance"],result["module"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}if(ENVIRONMENT_IS_PTHREAD){var instance=new WebAssembly.Instance(wasmModule,getWasmImports());return receiveInstance(instance,wasmModule)}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var terminateWorker=worker=>{worker.terminate();worker.onmessage=e=>{}};var cleanupThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];PThread.returnWorkerToPool(worker)};var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var spawnThread=threadParams=>{var worker=PThread.getNewWorker();if(!worker){return 6}PThread.runningWorkers.push(worker);PThread.pthreads[threadParams.pthread_ptr]=worker;worker.pthread_ptr=threadParams.pthread_ptr;var msg={cmd:"run",start_routine:threadParams.startRoutine,arg:threadParams.arg,pthread_ptr:threadParams.pthread_ptr};if(ENVIRONMENT_IS_NODE){worker.unref()}worker.postMessage(msg,threadParams.transferList);return 0};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var stackSave=()=>_emscripten_stack_get_current();var stackRestore=val=>__emscripten_stack_restore(val);var stackAlloc=sz=>__emscripten_stack_alloc(sz);var proxyToMainThread=(funcIndex,emAsmAddr,sync,...callArgs)=>{var serializedNumCallArgs=callArgs.length*2;var sp=stackSave();var args=stackAlloc(serializedNumCallArgs*8);var b=args/8;for(var i=0;i<callArgs.length;i++){var arg=callArgs[i];if(typeof arg=="bigint"){(growMemViews(),HEAP64)[b+2*i]=1n;(growMemViews(),HEAP64)[b+2*i+1]=arg}else{(growMemViews(),HEAP64)[b+2*i]=0n;(growMemViews(),HEAPF64)[b+2*i+1]=arg}}var rtn=__emscripten_run_js_on_main_thread(funcIndex,emAsmAddr,serializedNumCallArgs,args,sync);stackRestore(sp);return rtn};function _proc_exit(code){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(0,0,1,code);EXITSTATUS=code;if(!keepRuntimeAlive()){PThread.terminateAllThreads();Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))}function exitOnMainThread(returnCode){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(1,0,0,returnCode);_exit(returnCode)}var exitJS=(status,implicit)=>{EXITSTATUS=status;if(ENVIRONMENT_IS_PTHREAD){exitOnMainThread(status);throw"unwind"}_proc_exit(status)};var _exit=exitJS;var PThread={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init(){if(!ENVIRONMENT_IS_PTHREAD){PThread.initMainThread()}},initMainThread(){var pthreadPoolSize=Module["pthreadPoolSize"];while(pthreadPoolSize--){PThread.allocateUnusedWorker()}addOnPreRun(async()=>{var pthreadPoolReady=PThread.loadWasmModuleToAllWorkers();addRunDependency("loading-workers");await pthreadPoolReady;removeRunDependency("loading-workers")})},terminateAllThreads:()=>{for(var worker of PThread.runningWorkers){terminateWorker(worker)}for(var worker of PThread.unusedWorkers){terminateWorker(worker)}PThread.unusedWorkers=[];PThread.runningWorkers=[];PThread.pthreads={}},returnWorkerToPool:worker=>{var pthread_ptr=worker.pthread_ptr;delete PThread.pthreads[pthread_ptr];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);worker.pthread_ptr=0;__emscripten_thread_free_data(pthread_ptr)},threadInitTLS(){PThread.tlsInitFunctions.forEach(f=>f())},loadWasmModuleToWorker:worker=>new Promise(onFinishedLoading=>{worker.onmessage=e=>{var d=e["data"];var cmd=d.cmd;if(d.targetThread&&d.targetThread!=_pthread_self()){var targetWorker=PThread.pthreads[d.targetThread];if(targetWorker){targetWorker.postMessage(d,d.transferList)}else{err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d.targetThread}, but that thread no longer exists!`)}return}if(cmd==="checkMailbox"){checkMailbox()}else if(cmd==="spawnThread"){spawnThread(d)}else if(cmd==="cleanupThread"){callUserCallback(()=>cleanupThread(d.thread))}else if(cmd==="loaded"){worker.loaded=true;if(ENVIRONMENT_IS_NODE&&!worker.pthread_ptr){worker.unref()}onFinishedLoading(worker)}else if(d.target==="setimmediate"){worker.postMessage(d)}else if(cmd==="uncaughtException"){worker.onerror(d.error)}else if(cmd==="callHandler"){Module[d.handler](...d.args)}else if(cmd){err(`worker sent an unknown command ${cmd}`)}};worker.onerror=e=>{var message="worker sent an error!";err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);throw e};if(ENVIRONMENT_IS_NODE){worker.on("message",data=>worker.onmessage({data}));worker.on("error",e=>worker.onerror(e))}var handlers=[];var knownHandlers=["onExit","onAbort","print","printErr"];for(var handler of knownHandlers){if(Module.propertyIsEnumerable(handler)){handlers.push(handler)}}worker.postMessage({cmd:"load",handlers,wasmMemory,wasmModule})}),async loadWasmModuleToAllWorkers(){if(ENVIRONMENT_IS_PTHREAD){return}let pthreadPoolReady=Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));return pthreadPoolReady},allocateUnusedWorker(){var worker;var pthreadMainJs=_scriptName;if(Module["mainScriptUrlOrBlob"]){pthreadMainJs=Module["mainScriptUrlOrBlob"];if(typeof pthreadMainJs!="string"){pthreadMainJs=URL.createObjectURL(pthreadMainJs)}}worker=new Worker(pthreadMainJs,{workerData:"em-pthread",name:"em-pthread"});PThread.unusedWorkers.push(worker)},getNewWorker(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}return PThread.unusedWorkers.pop()}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);function establishStackSpace(pthread_ptr){var stackHigh=Number((growMemViews(),HEAPU64)[(pthread_ptr+88)/8]);var stackSize=Number((growMemViews(),HEAPU64)[(pthread_ptr+96)/8]);var stackLow=stackHigh-stackSize;_emscripten_stack_set_limits(stackHigh,stackLow);stackRestore(stackHigh)}var wasmTableMirror=[];var getWasmTableEntry=funcPtr=>{funcPtr=Number(funcPtr);var func=wasmTableMirror[funcPtr];if(!func){wasmTableMirror[funcPtr]=func=wasmTable.get(BigInt(funcPtr));if(Asyncify.isAsyncExport(func)){wasmTableMirror[funcPtr]=func=Asyncify.makeAsyncFunction(func)}}return func};var invokeEntryPoint=async(ptr,arg)=>{runtimeKeepaliveCounter=0;noExitRuntime=0;var result=(a1=>WebAssembly.promising(getWasmTableEntry(ptr)).call(null,BigInt(a1)))(arg);function finish(result){if(keepRuntimeAlive()){EXITSTATUS=result;return}__emscripten_thread_exit(result)}result=await result;finish(result)};invokeEntryPoint.isAsync=true;var noExitRuntime=true;var registerTLSInit=tlsInitFunc=>PThread.tlsInitFunctions.push(tlsInitFunc);var wasmMemory;function pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(2,0,1,pthread_ptr,attr,startRoutine,arg);return ___pthread_create_js(pthread_ptr,attr,startRoutine,arg)}var _emscripten_has_threading_support=()=>!!globalThis.SharedArrayBuffer;var INT53_MAX=9007199254740992;var INT53_MIN=-9007199254740992;var bigintToI53Checked=num=>num<INT53_MIN||num>INT53_MAX?NaN:Number(num);function ___pthread_create_js(pthread_ptr,attr,startRoutine,arg){pthread_ptr=bigintToI53Checked(pthread_ptr);attr=bigintToI53Checked(attr);startRoutine=bigintToI53Checked(startRoutine);arg=bigintToI53Checked(arg);if(!_emscripten_has_threading_support()){return 6}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg)}if(error)return error;var threadParams={startRoutine,pthread_ptr,arg,transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd="spawnThread";postMessage(threadParams,transferList);return 0}return spawnThread(threadParams)}var syscallGetVarargP=()=>{var ret=Number((growMemViews(),HEAPU64)[SYSCALLS.varargs/8]);SYSCALLS.varargs+=8;return ret};var syscallGetVarargI=()=>{var ret=(growMemViews(),HEAP32)[+SYSCALLS.varargs/4];SYSCALLS.varargs+=4;return ret};var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\\/]+|\\/)\\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>view.set(crypto.getRandomValues(new Uint8Array(view.byteLength)));var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8Decoder=globalThis.TextDecoder&&new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.buffer instanceof ArrayBuffer?heapOrArray.subarray(idx,endPtr):heapOrArray.slice(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;var fd=process.stdin.fd;try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE)}catch(e){if(e.toString().includes("EOF"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}}else if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>(growMemViews(),HEAPU8).fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===(growMemViews(),HEAP8).buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===(growMemViews(),HEAP8).buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}(growMemViews(),HEAP8).set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}if(Module["logReadFiles"]&&!(flags&1)){if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,(growMemViews(),HEAP8),ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>ptr?UTF8ArrayToString((growMemViews(),HEAPU8),ptr,maxBytesToRead,ignoreNul):"";var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){(growMemViews(),HEAPU32)[buf/4]=stat.dev;(growMemViews(),HEAPU32)[(buf+4)/4]=stat.mode;(growMemViews(),HEAPU64)[(buf+8)/8]=BigInt(stat.nlink);(growMemViews(),HEAPU32)[(buf+16)/4]=stat.uid;(growMemViews(),HEAPU32)[(buf+20)/4]=stat.gid;(growMemViews(),HEAPU32)[(buf+24)/4]=stat.rdev;(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stat.size);(growMemViews(),HEAP32)[(buf+40)/4]=4096;(growMemViews(),HEAP32)[(buf+44)/4]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(Math.floor(atime/1e3));(growMemViews(),HEAPU64)[(buf+56)/8]=BigInt(atime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+64)/8]=BigInt(Math.floor(mtime/1e3));(growMemViews(),HEAPU64)[(buf+72)/8]=BigInt(mtime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+80)/8]=BigInt(Math.floor(ctime/1e3));(growMemViews(),HEAPU64)[(buf+88)/8]=BigInt(ctime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+96)/8]=BigInt(stat.ino);return 0},writeStatFs(buf,stats){(growMemViews(),HEAPU32)[(buf+8)/4]=stats.bsize;(growMemViews(),HEAPU32)[(buf+72)/4]=stats.bsize;(growMemViews(),HEAP64)[(buf+16)/8]=BigInt(stats.blocks);(growMemViews(),HEAP64)[(buf+24)/8]=BigInt(stats.bfree);(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stats.bavail);(growMemViews(),HEAP64)[(buf+40)/8]=BigInt(stats.files);(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(stats.ffree);(growMemViews(),HEAPU32)[(buf+56)/4]=stats.fsid;(growMemViews(),HEAPU32)[(buf+80)/4]=stats.flags;(growMemViews(),HEAPU32)[(buf+64)/4]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=(growMemViews(),HEAPU8).slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_fcntl64(fd,cmd,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(3,0,1,fd,cmd,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 5:{var arg=syscallGetVarargP();var offset=0;(growMemViews(),HEAP16)[(arg+offset)/2]=2;return 0}case 6:case 7:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(4,0,1,fd,buf);buf=bigintToI53Checked(buf);try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,(growMemViews(),HEAPU8),outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(5,0,1,buf,size);buf=bigintToI53Checked(buf);size=bigintToI53Checked(size);try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_getdents64(fd,dirp,count){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(6,0,1,fd,dirp,count);dirp=bigintToI53Checked(dirp);count=bigintToI53Checked(count);try{var stream=SYSCALLS.getStreamFromFD(fd);stream.getdents||=FS.readdir(stream.path);var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var startIdx=Math.floor(off/struct_size);var endIdx=Math.min(stream.getdents.length,startIdx+Math.floor(count/struct_size));for(var idx=startIdx;idx<endIdx;idx++){var id;var type;var name=stream.getdents[idx];if(name==="."){id=stream.node.id;type=4}else if(name===".."){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4}else{var child;try{child=FS.lookupNode(stream.node,name)}catch(e){if(e?.errno===28){continue}throw e}id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8}(growMemViews(),HEAP64)[(dirp+pos)/8]=BigInt(id);(growMemViews(),HEAP64)[(dirp+pos+8)/8]=BigInt((idx+1)*struct_size);(growMemViews(),HEAP16)[(dirp+pos+16)/2]=280;(growMemViews(),HEAP8)[dirp+pos+18]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(7,0,1,fd,op,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:{if(!stream.tty)return-59;return 0}case 21505:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcgets){var termios=stream.tty.ops.ioctl_tcgets(stream);var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=termios.c_iflag||0;(growMemViews(),HEAP32)[(argp+4)/4]=termios.c_oflag||0;(growMemViews(),HEAP32)[(argp+8)/4]=termios.c_cflag||0;(growMemViews(),HEAP32)[(argp+12)/4]=termios.c_lflag||0;for(var i=0;i<32;i++){(growMemViews(),HEAP8)[argp+i+17]=termios.c_cc[i]||0}return 0}return 0}case 21510:case 21511:case 21512:{if(!stream.tty)return-59;return 0}case 21506:case 21507:case 21508:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcsets){var argp=syscallGetVarargP();var c_iflag=(growMemViews(),HEAP32)[argp/4];var c_oflag=(growMemViews(),HEAP32)[(argp+4)/4];var c_cflag=(growMemViews(),HEAP32)[(argp+8)/4];var c_lflag=(growMemViews(),HEAP32)[(argp+12)/4];var c_cc=[];for(var i=0;i<32;i++){c_cc.push((growMemViews(),HEAP8)[argp+i+17])}return stream.tty.ops.ioctl_tcsets(stream.tty,op,{c_iflag,c_oflag,c_cflag,c_lflag,c_cc})}return 0}case 21519:{if(!stream.tty)return-59;var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21537:case 21531:{var argp=syscallGetVarargP();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tiocgwinsz){var winsize=stream.tty.ops.ioctl_tiocgwinsz(stream.tty);var argp=syscallGetVarargP();(growMemViews(),HEAP16)[argp/2]=winsize[0];(growMemViews(),HEAP16)[(argp+2)/2]=winsize[1]}return 0}case 21524:{if(!stream.tty)return-59;return 0}case 21515:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(8,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(9,0,1,dirfd,path,buf,flags);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(10,0,1,dirfd,path,flags,varargs);path=bigintToI53Checked(path);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(11,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");function __emscripten_init_main_thread_js(tb){tb=bigintToI53Checked(tb);__emscripten_thread_init(tb,!ENVIRONMENT_IS_WORKER,1,!ENVIRONMENT_IS_WEB,5242880,false);PThread.threadInitTLS()}var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var maybeExit=()=>{if(!keepRuntimeAlive()){try{if(ENVIRONMENT_IS_PTHREAD){if(_pthread_self())__emscripten_thread_exit(EXITSTATUS);return}_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}};function __emscripten_thread_mailbox_await(pthread_ptr){pthread_ptr=bigintToI53Checked(pthread_ptr);if(Atomics.waitAsync){var wait=Atomics.waitAsync((growMemViews(),HEAP32),pthread_ptr/4,pthread_ptr);wait.value.then(checkMailbox);var waitingAsync=pthread_ptr+228;Atomics.store((growMemViews(),HEAP32),waitingAsync/4,1)}}var checkMailbox=()=>callUserCallback(()=>{var pthread_ptr=_pthread_self();if(pthread_ptr){__emscripten_thread_mailbox_await(pthread_ptr);__emscripten_check_mailbox()}});function __emscripten_notify_mailbox_postmessage(targetThread,currThreadId){targetThread=bigintToI53Checked(targetThread);currThreadId=bigintToI53Checked(currThreadId);if(targetThread==currThreadId){setTimeout(checkMailbox)}else if(ENVIRONMENT_IS_PTHREAD){postMessage({targetThread,cmd:"checkMailbox"})}else{var worker=PThread.pthreads[targetThread];if(!worker){return}worker.postMessage({cmd:"checkMailbox"})}}var proxiedJSCallArgs=[];function __emscripten_receive_on_main_thread_js(funcIndex,emAsmAddr,callingThread,numCallArgs,args){emAsmAddr=bigintToI53Checked(emAsmAddr);callingThread=bigintToI53Checked(callingThread);args=bigintToI53Checked(args);numCallArgs/=2;proxiedJSCallArgs.length=numCallArgs;var b=args/8;for(var i=0;i<numCallArgs;i++){if((growMemViews(),HEAP64)[b+2*i]){proxiedJSCallArgs[i]=(growMemViews(),HEAP64)[b+2*i+1]}else{proxiedJSCallArgs[i]=(growMemViews(),HEAPF64)[b+2*i+1]}}var func=proxiedFunctionTable[funcIndex];PThread.currentProxiedOperationCallerThread=callingThread;var rtn=func(...proxiedJSCallArgs);PThread.currentProxiedOperationCallerThread=0;if(typeof rtn=="bigint"){rtn=bigintToI53Checked(rtn)}return rtn}function __emscripten_thread_cleanup(thread){thread=bigintToI53Checked(thread);if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({cmd:"cleanupThread",thread})}function __emscripten_thread_set_strongref(thread){thread=bigintToI53Checked(thread);if(ENVIRONMENT_IS_NODE){PThread.pthreads[thread].ref()}}var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time,tmPtr){time=bigintToI53Checked(time);tmPtr=bigintToI53Checked(tmPtr);var date=new Date(time*1e3);(growMemViews(),HEAP32)[tmPtr/4]=date.getSeconds();(growMemViews(),HEAP32)[(tmPtr+4)/4]=date.getMinutes();(growMemViews(),HEAP32)[(tmPtr+8)/4]=date.getHours();(growMemViews(),HEAP32)[(tmPtr+12)/4]=date.getDate();(growMemViews(),HEAP32)[(tmPtr+16)/4]=date.getMonth();(growMemViews(),HEAP32)[(tmPtr+20)/4]=date.getFullYear()-1900;(growMemViews(),HEAP32)[(tmPtr+24)/4]=date.getDay();var yday=ydayFromDate(date)|0;(growMemViews(),HEAP32)[(tmPtr+28)/4]=yday;(growMemViews(),HEAP64)[(tmPtr+40)/8]=BigInt(-(date.getTimezoneOffset()*60));var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;(growMemViews(),HEAP32)[(tmPtr+32)/4]=dst}function __mmap_js(len,prot,flags,fd,offset,allocated,addr){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(12,0,1,len,prot,flags,fd,offset,allocated,addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);allocated=bigintToI53Checked(allocated);addr=bigintToI53Checked(addr);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;(growMemViews(),HEAP32)[allocated/4]=res.allocated;(growMemViews(),HEAPU64)[addr/8]=BigInt(ptr);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(13,0,1,addr,len,prot,flags,fd,offset);addr=bigintToI53Checked(addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __tzset_js=function(timezone,daylight,std_name,dst_name){timezone=bigintToI53Checked(timezone);daylight=bigintToI53Checked(daylight);std_name=bigintToI53Checked(std_name);dst_name=bigintToI53Checked(dst_name);var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);(growMemViews(),HEAPU64)[timezone/8]=BigInt(stdTimezoneOffset*60);(growMemViews(),HEAP32)[daylight/4]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_get_now=()=>performance.timeOrigin+performance.now();var _emscripten_date_now=()=>Date.now();var nowIsMonotonic=1;var checkWasiClock=clock_id=>clock_id>=0&&clock_id<=3;function _clock_time_get(clk_id,ignored_precision,ptime){ignored_precision=bigintToI53Checked(ignored_precision);ptime=bigintToI53Checked(ptime);if(!checkWasiClock(clk_id)){return 28}var now;if(clk_id===0){now=_emscripten_date_now()}else if(nowIsMonotonic){now=_emscripten_get_now()}else{return 52}var nsec=Math.round(now*1e3*1e3);(growMemViews(),HEAP64)[ptime/8]=BigInt(nsec);return 0}var _emscripten_check_blocking_allowed=()=>{};var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var _emscripten_exit_with_live_runtime=()=>{runtimeKeepalivePush();throw"unwind"};var jsStackTrace=()=>(new Error).stack.toString();var getCallstack=flags=>{var callstack=jsStackTrace();var lines=callstack.split("\\n");callstack="";var firefoxRe=new RegExp("\\\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");var chromeRe=new RegExp("\\\\s*at (.*?) \\\\((.*):(.*):(.*)\\\\)");for(var line of lines){var symbolName="";var file="";var lineno=0;var column=0;var parts=chromeRe.exec(line);if(parts?.length==5){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]}else{parts=firefoxRe.exec(line);if(parts?.length>=4){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]|0}else{callstack+=line+"\\n";continue}}if(symbolName=="_emscripten_log"||symbolName=="_emscripten_get_callstack"){callstack="";continue}if(flags&24){if(flags&64){file=file.substring(file.replace(/\\\\/g,"/").lastIndexOf("/")+1)}callstack+=`    at ${symbolName} (${file}:${lineno}:${column})\\n`}}callstack=callstack.replace(/\\s+$/,"");return callstack};function _emscripten_get_callstack(flags,str,maxbytes){str=bigintToI53Checked(str);var callstack=getCallstack(flags);if(!str||maxbytes<=0){return lengthBytesUTF8(callstack)+1}var bytesWrittenExcludingNull=stringToUTF8(callstack,str,maxbytes);return bytesWrittenExcludingNull+1}var getHeapMax=()=>4294967296;var _emscripten_get_heap_max=()=>BigInt(getHeapMax());var _emscripten_has_asyncify=()=>2;var _emscripten_num_logical_cores=()=>ENVIRONMENT_IS_NODE?require("os").cpus().length:navigator["hardwareConcurrency"];var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(BigInt(pages));updateMemoryViews();return 1}catch(e){}};function _emscripten_resize_heap(requestedSize){requestedSize=bigintToI53Checked(requestedSize);var oldSize=(growMemViews(),HEAPU8).length;if(requestedSize<=oldSize){return false}var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false}var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var writeI53ToI64=(ptr,num)=>{(growMemViews(),HEAPU32)[ptr/4]=num;var lower=(growMemViews(),HEAPU32)[ptr/4];(growMemViews(),HEAPU32)[(ptr+4)/4]=(num-lower)/4294967296};var stringToNewUTF8=str=>{var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret};var readI53FromI64=ptr=>(growMemViews(),HEAPU32)[ptr/4]+(growMemViews(),HEAP32)[(ptr+4)/4]*4294967296;var WebGPU={Internals:{jsObjects:[],jsObjectInsert:(ptr,jsObject)=>{WebGPU.Internals.jsObjects[ptr]=jsObject},bufferOnUnmaps:[],futures:[],futureInsert:(futureId,promise)=>{WebGPU.Internals.futures[futureId]=new Promise(resolve=>promise.finally(()=>resolve(futureId)))}},getJsObject:ptr=>{if(!ptr)return undefined;return WebGPU.Internals.jsObjects[ptr]},importJsAdapter:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateAdapter(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroup:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroup(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroupLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroupLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBuffer:(buffer,parentPtr=0)=>{assert(buffer.mapState==="unmapped");var bufferPtr=_emwgpuCreateBuffer(parentPtr);WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);return bufferPtr},importJsCommandBuffer:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandBuffer(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsCommandEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsDevice:(device,parentPtr=0)=>{var queuePtr=_emwgpuCreateQueue(parentPtr);var devicePtr=_emwgpuCreateDevice(parentPtr,queuePtr);WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);return devicePtr},importJsExternalTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateExternalTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsPipelineLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreatePipelineLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQuerySet:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQuerySet(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQueue:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQueue(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundle:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundle(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundleEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundleEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSampler:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSampler(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsShaderModule:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateShaderModule(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSurface:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSurface(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTextureView:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTextureView(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},errorCallback:(callback,type,message,userdata)=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(message);((a1,a2,a3)=>getWasmTableEntry(callback).call(null,a1,BigInt(a2),BigInt(a3)))(type,BigInt(messagePtr),userdata);stackRestore(sp)},iterateExtensions:(root,handlers)=>{for(var ptr=Number((growMemViews(),HEAPU64)[root/8]);ptr;ptr=Number((growMemViews(),HEAPU64)[ptr/8])){var sType=(growMemViews(),HEAP32)[(ptr+8)/4];var handler=handlers[sType](ptr)}},setStringView:(ptr,data,length)=>{(growMemViews(),HEAPU64)[ptr/8]=BigInt(data);(growMemViews(),HEAPU64)[(ptr+8)/8]=BigInt(length)},makeStringFromStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);return UTF8ToString(ptr,length)},makeStringFromOptionalStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);if(!ptr){if(length===0){return""}return undefined}return UTF8ToString(ptr,length)},makeColor:ptr=>({r:(growMemViews(),HEAPF64)[ptr/8],g:(growMemViews(),HEAPF64)[(ptr+8)/8],b:(growMemViews(),HEAPF64)[(ptr+16)/8],a:(growMemViews(),HEAPF64)[(ptr+24)/8]}),makeExtent3D:ptr=>({width:(growMemViews(),HEAPU32)[ptr/4],height:(growMemViews(),HEAPU32)[(ptr+4)/4],depthOrArrayLayers:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeOrigin3D:ptr=>({x:(growMemViews(),HEAPU32)[ptr/4],y:(growMemViews(),HEAPU32)[(ptr+4)/4],z:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeTexelCopyTextureInfo:ptr=>({texture:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[ptr/8])),mipLevel:(growMemViews(),HEAPU32)[(ptr+8)/4],origin:WebGPU.makeOrigin3D(ptr+12),aspect:WebGPU.TextureAspect[(growMemViews(),HEAP32)[(ptr+24)/4]]}),makeTexelCopyBufferLayout:ptr=>{var bytesPerRow=(growMemViews(),HEAPU32)[(ptr+8)/4];var rowsPerImage=(growMemViews(),HEAPU32)[(ptr+12)/4];return{offset:readI53FromI64(ptr),bytesPerRow:bytesPerRow===4294967295?undefined:bytesPerRow,rowsPerImage:rowsPerImage===4294967295?undefined:rowsPerImage}},makeTexelCopyBufferInfo:ptr=>{var layoutPtr=ptr+0;var bufferCopyView=WebGPU.makeTexelCopyBufferLayout(layoutPtr);bufferCopyView["buffer"]=WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+16)/8]));return bufferCopyView},makePassTimestampWrites:ptr=>{if(ptr===0)return undefined;return{querySet:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),beginningOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+16)/4],endOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+20)/4]}},makePipelineConstants:(constantCount,constantsPtr)=>{if(!constantCount)return;var constants={};for(var i=0;i<constantCount;++i){var entryPtr=constantsPtr+32*i;var key=WebGPU.makeStringFromStringView(entryPtr+8);constants[key]=(growMemViews(),HEAPF64)[(entryPtr+24)/8]}return constants},makePipelineLayout:layoutPtr=>{if(!layoutPtr)return"auto";return WebGPU.getJsObject(layoutPtr)},makeComputeState:ptr=>{if(!ptr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(ptr+32)/8]),Number((growMemViews(),HEAPU64)[(ptr+40)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(ptr+16)};return desc},makeComputePipelineDesc:descriptor=>{var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),compute:WebGPU.makeComputeState(descriptor+32)};return desc},makeRenderPipelineDesc:descriptor=>{function makePrimitiveState(psPtr){if(!psPtr)return undefined;return{topology:WebGPU.PrimitiveTopology[(growMemViews(),HEAP32)[(psPtr+8)/4]],stripIndexFormat:WebGPU.IndexFormat[(growMemViews(),HEAP32)[(psPtr+12)/4]],frontFace:WebGPU.FrontFace[(growMemViews(),HEAP32)[(psPtr+16)/4]],cullMode:WebGPU.CullMode[(growMemViews(),HEAP32)[(psPtr+20)/4]],unclippedDepth:!!(growMemViews(),HEAPU32)[(psPtr+24)/4]}}function makeBlendComponent(bdPtr){if(!bdPtr)return undefined;return{operation:WebGPU.BlendOperation[(growMemViews(),HEAP32)[bdPtr/4]],srcFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+4)/4]],dstFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+8)/4]]}}function makeBlendState(bsPtr){if(!bsPtr)return undefined;return{alpha:makeBlendComponent(bsPtr+12),color:makeBlendComponent(bsPtr+0)}}function makeColorState(csPtr){var format=WebGPU.TextureFormat[(growMemViews(),HEAP32)[(csPtr+8)/4]];return format?{format,blend:makeBlendState(Number((growMemViews(),HEAPU64)[(csPtr+16)/8])),writeMask:(growMemViews(),HEAPU32)[(csPtr+24)/4]}:undefined}function makeColorStates(count,csArrayPtr){var states=[];for(var i=0;i<count;++i){states.push(makeColorState(csArrayPtr+32*i))}return states}function makeStencilStateFace(ssfPtr){return{compare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[ssfPtr/4]],failOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+4)/4]],depthFailOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+8)/4]],passOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+12)/4]]}}function makeDepthStencilState(dssPtr){if(!dssPtr)return undefined;return{format:WebGPU.TextureFormat[(growMemViews(),HEAP32)[(dssPtr+8)/4]],depthWriteEnabled:!!(growMemViews(),HEAPU32)[(dssPtr+12)/4],depthCompare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[(dssPtr+16)/4]],stencilFront:makeStencilStateFace(dssPtr+20),stencilBack:makeStencilStateFace(dssPtr+36),stencilReadMask:(growMemViews(),HEAPU32)[(dssPtr+52)/4],stencilWriteMask:(growMemViews(),HEAPU32)[(dssPtr+56)/4],depthBias:(growMemViews(),HEAP32)[(dssPtr+60)/4],depthBiasSlopeScale:(growMemViews(),HEAPF32)[(dssPtr+64)/4],depthBiasClamp:(growMemViews(),HEAPF32)[(dssPtr+68)/4]}}function makeVertexAttribute(vaPtr){return{format:WebGPU.VertexFormat[(growMemViews(),HEAP32)[(vaPtr+8)/4]],offset:readI53FromI64(vaPtr+16),shaderLocation:(growMemViews(),HEAPU32)[(vaPtr+24)/4]}}function makeVertexAttributes(count,vaArrayPtr){var vas=[];for(var i=0;i<count;++i){vas.push(makeVertexAttribute(vaArrayPtr+i*32))}return vas}function makeVertexBuffer(vbPtr){if(!vbPtr)return undefined;var stepMode=WebGPU.VertexStepMode[(growMemViews(),HEAP32)[(vbPtr+8)/4]];var attributeCount=Number((growMemViews(),HEAPU64)[(vbPtr+24)/8]);if(!stepMode&&!attributeCount){return null}return{arrayStride:readI53FromI64(vbPtr+16),stepMode,attributes:makeVertexAttributes(attributeCount,Number((growMemViews(),HEAPU64)[(vbPtr+32)/8]))}}function makeVertexBuffers(count,vbArrayPtr){if(!count)return undefined;var vbs=[];for(var i=0;i<count;++i){vbs.push(makeVertexBuffer(vbArrayPtr+i*40))}return vbs}function makeVertexState(viPtr){if(!viPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(viPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(viPtr+32)/8]),Number((growMemViews(),HEAPU64)[(viPtr+40)/8])),buffers:makeVertexBuffers(Number((growMemViews(),HEAPU64)[(viPtr+48)/8]),Number((growMemViews(),HEAPU64)[(viPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(viPtr+16)};return desc}function makeMultisampleState(msPtr){if(!msPtr)return undefined;return{count:(growMemViews(),HEAPU32)[(msPtr+8)/4],mask:(growMemViews(),HEAPU32)[(msPtr+12)/4],alphaToCoverageEnabled:!!(growMemViews(),HEAPU32)[(msPtr+16)/4]}}function makeFragmentState(fsPtr){if(!fsPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(fsPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(fsPtr+32)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+40)/8])),targets:makeColorStates(Number((growMemViews(),HEAPU64)[(fsPtr+48)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(fsPtr+16)};return desc}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),vertex:makeVertexState(descriptor+32),primitive:makePrimitiveState(descriptor+96),depthStencil:makeDepthStencilState(Number((growMemViews(),HEAPU64)[(descriptor+128)/8])),multisample:makeMultisampleState(descriptor+136),fragment:makeFragmentState(Number((growMemViews(),HEAPU64)[(descriptor+160)/8]))};return desc},fillLimitStruct:(limits,limitsOutPtr)=>{var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsOutPtr/8]);function setLimitValueU32(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;(growMemViews(),HEAPU32)[(basePtr+limitOffset)/4]=limitValue}function setLimitValueU64(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;writeI53ToI64(basePtr+limitOffset,limitValue)}setLimitValueU32("maxTextureDimension1D",limitsOutPtr,8);setLimitValueU32("maxTextureDimension2D",limitsOutPtr,12);setLimitValueU32("maxTextureDimension3D",limitsOutPtr,16);setLimitValueU32("maxTextureArrayLayers",limitsOutPtr,20);setLimitValueU32("maxBindGroups",limitsOutPtr,24);setLimitValueU32("maxBindGroupsPlusVertexBuffers",limitsOutPtr,28);setLimitValueU32("maxBindingsPerBindGroup",limitsOutPtr,32);setLimitValueU32("maxDynamicUniformBuffersPerPipelineLayout",limitsOutPtr,36);setLimitValueU32("maxDynamicStorageBuffersPerPipelineLayout",limitsOutPtr,40);setLimitValueU32("maxSampledTexturesPerShaderStage",limitsOutPtr,44);setLimitValueU32("maxSamplersPerShaderStage",limitsOutPtr,48);setLimitValueU32("maxStorageBuffersPerShaderStage",limitsOutPtr,52);setLimitValueU32("maxStorageTexturesPerShaderStage",limitsOutPtr,56);setLimitValueU32("maxUniformBuffersPerShaderStage",limitsOutPtr,60);setLimitValueU32("minUniformBufferOffsetAlignment",limitsOutPtr,80);setLimitValueU32("minStorageBufferOffsetAlignment",limitsOutPtr,84);setLimitValueU64("maxUniformBufferBindingSize",limitsOutPtr,64);setLimitValueU64("maxStorageBufferBindingSize",limitsOutPtr,72);setLimitValueU32("maxVertexBuffers",limitsOutPtr,88);setLimitValueU64("maxBufferSize",limitsOutPtr,96);setLimitValueU32("maxVertexAttributes",limitsOutPtr,104);setLimitValueU32("maxVertexBufferArrayStride",limitsOutPtr,108);setLimitValueU32("maxInterStageShaderVariables",limitsOutPtr,112);setLimitValueU32("maxColorAttachments",limitsOutPtr,116);setLimitValueU32("maxColorAttachmentBytesPerSample",limitsOutPtr,120);setLimitValueU32("maxComputeWorkgroupStorageSize",limitsOutPtr,124);setLimitValueU32("maxComputeInvocationsPerWorkgroup",limitsOutPtr,128);setLimitValueU32("maxComputeWorkgroupSizeX",limitsOutPtr,132);setLimitValueU32("maxComputeWorkgroupSizeY",limitsOutPtr,136);setLimitValueU32("maxComputeWorkgroupSizeZ",limitsOutPtr,140);setLimitValueU32("maxComputeWorkgroupsPerDimension",limitsOutPtr,144);setLimitValueU32("maxImmediateSize",limitsOutPtr,148);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;setLimitValueU32("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20,limits.maxStorageTexturesPerShaderStage);setLimitValueU32("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28,limits.maxStorageTexturesPerShaderStage)}},fillAdapterInfoStruct:(info,infoStruct)=>{(growMemViews(),HEAPU32)[(infoStruct+88)/4]=info.subgroupMinSize;(growMemViews(),HEAPU32)[(infoStruct+92)/4]=info.subgroupMaxSize;var strs=info.vendor+info.architecture+info.device+info.description;var strPtr=stringToNewUTF8(strs);var vendorLen=lengthBytesUTF8(info.vendor);WebGPU.setStringView(infoStruct+8,strPtr,vendorLen);strPtr+=vendorLen;var architectureLen=lengthBytesUTF8(info.architecture);WebGPU.setStringView(infoStruct+24,strPtr,architectureLen);strPtr+=architectureLen;var deviceLen=lengthBytesUTF8(info.device);WebGPU.setStringView(infoStruct+40,strPtr,deviceLen);strPtr+=deviceLen;var descriptionLen=lengthBytesUTF8(info.description);WebGPU.setStringView(infoStruct+56,strPtr,descriptionLen);strPtr+=descriptionLen;(growMemViews(),HEAP32)[(infoStruct+72)/4]=2;var adapterType=info.isFallbackAdapter?3:4;(growMemViews(),HEAP32)[(infoStruct+76)/4]=adapterType;(growMemViews(),HEAPU32)[(infoStruct+80)/4]=0;(growMemViews(),HEAPU32)[(infoStruct+84)/4]=0},AddressMode:[,"clamp-to-edge","repeat","mirror-repeat"],BlendFactor:[,"zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],BlendOperation:[,"add","subtract","reverse-subtract","min","max"],BufferBindingType:[,,"uniform","storage","read-only-storage"],BufferMapState:[,"unmapped","pending","mapped"],CompareFunction:[,"never","less","equal","less-equal","greater","not-equal","greater-equal","always"],CompilationInfoRequestStatus:[,"success","callback-cancelled"],ComponentSwizzle:[,"0","1","r","g","b","a"],CompositeAlphaMode:[,"opaque","premultiplied","unpremultiplied","inherit"],CullMode:[,"none","front","back"],ErrorFilter:[,"validation","out-of-memory","internal"],FeatureLevel:[,"compatibility","core"],FeatureName:{1:"core-features-and-limits",2:"depth-clip-control",3:"depth32float-stencil8",4:"texture-compression-bc",5:"texture-compression-bc-sliced-3d",6:"texture-compression-etc2",7:"texture-compression-astc",8:"texture-compression-astc-sliced-3d",9:"timestamp-query",10:"indirect-first-instance",11:"shader-f16",12:"rg11b10ufloat-renderable",13:"bgra8unorm-storage",14:"float32-filterable",15:"float32-blendable",16:"clip-distances",17:"dual-source-blending",18:"subgroups",19:"texture-formats-tier1",20:"texture-formats-tier2",21:"primitive-index",22:"texture-component-swizzle",327692:"chromium-experimental-unorm16-texture-formats",327729:"chromium-experimental-multi-draw-indirect"},FilterMode:[,"nearest","linear"],FrontFace:[,"ccw","cw"],IndexFormat:[,"uint16","uint32"],InstanceFeatureName:[,"timed-wait-any","shader-source-spirv","multiple-devices-per-adapter"],LoadOp:[,"load","clear"],MipmapFilterMode:[,"nearest","linear"],OptionalBool:["false","true"],PowerPreference:[,"low-power","high-performance"],PredefinedColorSpace:[,"srgb","display-p3"],PrimitiveTopology:[,"point-list","line-list","line-strip","triangle-list","triangle-strip"],QueryType:[,"occlusion","timestamp"],SamplerBindingType:[,,"filtering","non-filtering","comparison"],Status:[,"success","error"],StencilOperation:[,"keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],StorageTextureAccess:[,,"write-only","read-only","read-write"],StoreOp:[,"store","discard"],SurfaceGetCurrentTextureStatus:[,"success-optimal","success-suboptimal","timeout","outdated","lost","error"],TextureAspect:[,"all","stencil-only","depth-only"],TextureDimension:[,"1d","2d","3d"],TextureFormat:[,"r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32float","r32uint","r32sint","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rgb9e5ufloat","rg32float","rg32uint","rg32sint","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32float","rgba32uint","rgba32sint","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],TextureSampleType:[,,"float","unfilterable-float","depth","sint","uint"],TextureViewDimension:[,"1d","2d","2d-array","cube","cube-array","3d"],ToneMappingMode:[,"standard","extended"],VertexFormat:[,"uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],VertexStepMode:[,"vertex","instance"],WGSLLanguageFeatureName:[,"readonly_and_readwrite_storage_textures","packed_4x8_integer_dot_product","unrestricted_pointer_parameters","pointer_composite_access","uniform_buffer_standard_layout","subgroup_id","texture_and_sampler_let","subgroup_uniformity","texture_formats_tier1"]};var emwgpuStringToInt_DeviceLostReason={undefined:1,unknown:1,destroyed:2};var runtimeKeepalivePop=()=>{runtimeKeepaliveCounter-=1};function _emwgpuAdapterRequestDevice(adapterPtr,futureId,deviceLostFutureId,devicePtr,queuePtr,descriptor){adapterPtr=bigintToI53Checked(adapterPtr);futureId=bigintToI53Checked(futureId);deviceLostFutureId=bigintToI53Checked(deviceLostFutureId);devicePtr=bigintToI53Checked(devicePtr);queuePtr=bigintToI53Checked(queuePtr);descriptor=bigintToI53Checked(descriptor);var adapter=WebGPU.getJsObject(adapterPtr);var desc={};if(descriptor){var requiredFeatureCount=Number((growMemViews(),HEAPU64)[(descriptor+24)/8]);if(requiredFeatureCount){var requiredFeaturesPtr=Number((growMemViews(),HEAPU64)[(descriptor+32)/8]);desc["requiredFeatures"]=Array.from((growMemViews(),HEAPU32).subarray(requiredFeaturesPtr/4,(requiredFeaturesPtr+requiredFeatureCount*4)/4),feature=>WebGPU.FeatureName[feature])}var limitsPtr=Number((growMemViews(),HEAPU64)[(descriptor+40)/8]);if(limitsPtr){var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsPtr/8]);var requiredLimits={};function setLimitU32IfDefined(name,basePtr,limitOffset,ignoreIfZero=false){var ptr=basePtr+limitOffset;var value=(growMemViews(),HEAPU32)[ptr/4];if(value!=4294967295&&(!ignoreIfZero||value!=0)){requiredLimits[name]=value}}function setLimitU64IfDefined(name,basePtr,limitOffset){var ptr=basePtr+limitOffset;var limitPart1=(growMemViews(),HEAPU32)[ptr/4];var limitPart2=(growMemViews(),HEAPU32)[(ptr+4)/4];if(limitPart1!=4294967295||limitPart2!=4294967295){requiredLimits[name]=readI53FromI64(ptr)}}setLimitU32IfDefined("maxTextureDimension1D",limitsPtr,8);setLimitU32IfDefined("maxTextureDimension2D",limitsPtr,12);setLimitU32IfDefined("maxTextureDimension3D",limitsPtr,16);setLimitU32IfDefined("maxTextureArrayLayers",limitsPtr,20);setLimitU32IfDefined("maxBindGroups",limitsPtr,24);setLimitU32IfDefined("maxBindGroupsPlusVertexBuffers",limitsPtr,28);setLimitU32IfDefined("maxBindingsPerBindGroup",limitsPtr,32);setLimitU32IfDefined("maxDynamicUniformBuffersPerPipelineLayout",limitsPtr,36);setLimitU32IfDefined("maxDynamicStorageBuffersPerPipelineLayout",limitsPtr,40);setLimitU32IfDefined("maxSampledTexturesPerShaderStage",limitsPtr,44);setLimitU32IfDefined("maxSamplersPerShaderStage",limitsPtr,48);setLimitU32IfDefined("maxStorageBuffersPerShaderStage",limitsPtr,52);setLimitU32IfDefined("maxStorageTexturesPerShaderStage",limitsPtr,56);setLimitU32IfDefined("maxUniformBuffersPerShaderStage",limitsPtr,60);setLimitU32IfDefined("minUniformBufferOffsetAlignment",limitsPtr,80);setLimitU32IfDefined("minStorageBufferOffsetAlignment",limitsPtr,84);setLimitU64IfDefined("maxUniformBufferBindingSize",limitsPtr,64);setLimitU64IfDefined("maxStorageBufferBindingSize",limitsPtr,72);setLimitU32IfDefined("maxVertexBuffers",limitsPtr,88);setLimitU64IfDefined("maxBufferSize",limitsPtr,96);setLimitU32IfDefined("maxVertexAttributes",limitsPtr,104);setLimitU32IfDefined("maxVertexBufferArrayStride",limitsPtr,108);setLimitU32IfDefined("maxInterStageShaderVariables",limitsPtr,112);setLimitU32IfDefined("maxColorAttachments",limitsPtr,116);setLimitU32IfDefined("maxColorAttachmentBytesPerSample",limitsPtr,120);setLimitU32IfDefined("maxComputeWorkgroupStorageSize",limitsPtr,124);setLimitU32IfDefined("maxComputeInvocationsPerWorkgroup",limitsPtr,128);setLimitU32IfDefined("maxComputeWorkgroupSizeX",limitsPtr,132);setLimitU32IfDefined("maxComputeWorkgroupSizeY",limitsPtr,136);setLimitU32IfDefined("maxComputeWorkgroupSizeZ",limitsPtr,140);setLimitU32IfDefined("maxComputeWorkgroupsPerDimension",limitsPtr,144);setLimitU32IfDefined("maxImmediateSize",limitsPtr,148,true);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;if("maxStorageBuffersInVertexStage"in GPUSupportedLimits.prototype){setLimitU32IfDefined("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16);setLimitU32IfDefined("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20);setLimitU32IfDefined("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24);setLimitU32IfDefined("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28)}}desc["requiredLimits"]=requiredLimits}var defaultQueuePtr=Number((growMemViews(),HEAPU64)[(descriptor+48)/8]);if(defaultQueuePtr){var defaultQueueDesc={label:WebGPU.makeStringFromOptionalStringView(defaultQueuePtr+8)};desc["defaultQueue"]=defaultQueueDesc}desc["label"]=WebGPU.makeStringFromOptionalStringView(descriptor+8)}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,adapter.requestDevice(desc).then(device=>{runtimeKeepalivePop();callUserCallback(()=>{WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);devicePtr=BigInt(devicePtr);WebGPU.Internals.futureInsert(deviceLostFutureId,device.lost.then(info=>{callUserCallback(()=>{device.onuncapturederror=ev=>{};var sp=stackSave();var messagePtr=stringToUTF8OnStack(info.message);_emwgpuOnDeviceLostCompleted(deviceLostFutureId,emwgpuStringToInt_DeviceLostReason[info.reason],BigInt(messagePtr));stackRestore(sp)})}));device.onuncapturederror=ev=>{var type=5;if(ev.error instanceof GPUValidationError)type=2;else if(ev.error instanceof GPUOutOfMemoryError)type=3;else if(ev.error instanceof GPUInternalError)type=4;var sp=stackSave();var messagePtr=stringToUTF8OnStack(ev.error.message);_emwgpuOnUncapturedError(BigInt(devicePtr),type,BigInt(messagePtr));stackRestore(sp)};_emwgpuOnRequestDeviceCompleted(futureId,1,BigInt(devicePtr),0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestDeviceCompleted(futureId,3,BigInt(devicePtr),BigInt(messagePtr));if(deviceLostFutureId){_emwgpuOnDeviceLostCompleted(deviceLostFutureId,4,BigInt(messagePtr))}stackRestore(sp)})}))}function _emwgpuBufferDestroy(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(onUnmap){for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]}buffer.destroy()}var warnOnce=text=>{warnOnce.shown||={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;if(ENVIRONMENT_IS_NODE)text="warning: "+text;err(text)}};var _emwgpuBufferGetConstMappedRange=function(bufferPtr,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);if(size==-1)size=undefined;var mapped;try{mapped=buffer.getMappedRange(offset,size)}catch(ex){return 0n}var data=_memalign(16,mapped.byteLength);(growMemViews(),HEAPU8).set(new Uint8Array(mapped),data);WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(()=>_free(data));return data})();return BigInt(ret)};var _emwgpuBufferMapAsync=function(bufferPtr,futureId,mode,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);futureId=bigintToI53Checked(futureId);mode=bigintToI53Checked(mode);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var buffer=WebGPU.getJsObject(bufferPtr);WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[];if(size==-1)size=undefined;runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,buffer.mapAsync(mode,offset,size).then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnMapAsyncCompleted(futureId,1,0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);var status=ex.name==="AbortError"?4:ex.name==="OperationError"?3:0;_emwgpuOnMapAsyncCompleted(futureId,status,BigInt(messagePtr));delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]})}))};function _emwgpuBufferUnmap(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(!onUnmap){return}for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];buffer.unmap()}function _emwgpuDelete(ptr){ptr=bigintToI53Checked(ptr);delete WebGPU.Internals.jsObjects[ptr]}function _emwgpuDeviceCreateBuffer(devicePtr,descriptor,bufferPtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);bufferPtr=bigintToI53Checked(bufferPtr);var mappedAtCreation=!!(growMemViews(),HEAPU32)[(descriptor+40)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),usage:(growMemViews(),HEAPU32)[(descriptor+24)/4],size:readI53FromI64(descriptor+32),mappedAtCreation};var device=WebGPU.getJsObject(devicePtr);var buffer;try{buffer=device.createBuffer(desc)}catch(ex){return false}WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);if(mappedAtCreation){WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[]}return true}function _emwgpuDeviceCreateShaderModule(devicePtr,descriptor,shaderModulePtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);shaderModulePtr=bigintToI53Checked(shaderModulePtr);var nextInChainPtr=Number((growMemViews(),HEAPU64)[descriptor/8]);var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),code:""};switch(sType){case 2:{desc["code"]=WebGPU.makeStringFromStringView(nextInChainPtr+16);break}}var device=WebGPU.getJsObject(devicePtr);WebGPU.Internals.jsObjectInsert(shaderModulePtr,device.createShaderModule(desc))}var _emwgpuDeviceDestroy=devicePtr=>{const device=WebGPU.getJsObject(devicePtr);device.onuncapturederror=null;device.destroy()};function _emwgpuInstanceRequestAdapter(instancePtr,futureId,options,adapterPtr){instancePtr=bigintToI53Checked(instancePtr);futureId=bigintToI53Checked(futureId);options=bigintToI53Checked(options);adapterPtr=bigintToI53Checked(adapterPtr);var opts;if(options){opts={featureLevel:WebGPU.FeatureLevel[(growMemViews(),HEAP32)[(options+8)/4]],powerPreference:WebGPU.PowerPreference[(growMemViews(),HEAP32)[(options+12)/4]],forceFallbackAdapter:!!(growMemViews(),HEAPU32)[(options+16)/4]};var nextInChainPtr=Number((growMemViews(),HEAPU64)[options/8]);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var webxrOptions=nextInChainPtr;opts.xrCompatible=!!(growMemViews(),HEAPU32)[(webxrOptions+16)/4]}}if(!("gpu"in navigator)){var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (navigator.gpu is not available)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp);return}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,navigator.gpu.requestAdapter(opts).then(adapter=>{runtimeKeepalivePop();callUserCallback(()=>{if(adapter){WebGPU.Internals.jsObjectInsert(adapterPtr,adapter);_emwgpuOnRequestAdapterCompleted(futureId,1,BigInt(adapterPtr),0n)}else{var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (requestAdapter returned null)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)}})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestAdapterCompleted(futureId,4,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)})}))}var _emwgpuQueueOnSubmittedWorkDone=function(queuePtr,futureId){queuePtr=bigintToI53Checked(queuePtr);futureId=bigintToI53Checked(futureId);var queue=WebGPU.getJsObject(queuePtr);runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,queue.onSubmittedWorkDone().then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnWorkDoneCompleted(futureId,1)})}))};var _emwgpuWaitAny=function(futurePtr,futureCount,timeoutMSPtr){futurePtr=bigintToI53Checked(futurePtr);futureCount=bigintToI53Checked(futureCount);timeoutMSPtr=bigintToI53Checked(timeoutMSPtr);return Asyncify.handleAsync(async()=>{var promises=[];if(timeoutMSPtr){var timeoutMS=(growMemViews(),HEAP32)[timeoutMSPtr/4];promises.length=futureCount+1;promises[futureCount]=new Promise(resolve=>setTimeout(resolve,timeoutMS,0))}else{promises.length=futureCount}for(var i=0;i<futureCount;++i){var futureId=readI53FromI64(futurePtr+i*8);if(!(futureId in WebGPU.Internals.futures)){return futureId}promises[i]=WebGPU.Internals.futures[futureId]}const firstResolvedFuture=await Promise.race(promises);delete WebGPU.Internals.futures[firstResolvedFuture];return firstResolvedFuture})};_emwgpuWaitAny.isAsync=true;var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};function _environ_get(__environ,environ_buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(14,0,1,__environ,environ_buf);__environ=bigintToI53Checked(__environ);environ_buf=bigintToI53Checked(environ_buf);var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;(growMemViews(),HEAPU64)[(__environ+envp)/8]=BigInt(ptr);bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=8}return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(15,0,1,penviron_count,penviron_buf_size);penviron_count=bigintToI53Checked(penviron_count);penviron_buf_size=bigintToI53Checked(penviron_buf_size);var strings=getEnvStrings();(growMemViews(),HEAPU64)[penviron_count/8]=BigInt(strings.length);var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}(growMemViews(),HEAPU64)[penviron_buf_size/8]=BigInt(bufSize);return 0}function _fd_close(fd){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(16,0,1,fd);try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.read(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(17,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset,whence,newOffset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(18,0,1,fd,offset,whence,newOffset);offset=bigintToI53Checked(offset);newOffset=bigintToI53Checked(newOffset);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);(growMemViews(),HEAP64)[newOffset/8]=BigInt(stream.position);if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.write(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(19,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _random_get(buffer,size){buffer=bigintToI53Checked(buffer);size=bigintToI53Checked(size);try{randomFill((growMemViews(),HEAPU8).subarray(buffer,buffer+size));return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _wgpuAdapterGetInfo(adapterPtr,info){adapterPtr=bigintToI53Checked(adapterPtr);info=bigintToI53Checked(info);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillAdapterInfoStruct(adapter.info,info);return 1}function _wgpuAdapterGetLimits(adapterPtr,limitsOutPtr){adapterPtr=bigintToI53Checked(adapterPtr);limitsOutPtr=bigintToI53Checked(limitsOutPtr);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillLimitStruct(adapter.limits,limitsOutPtr);return 1}function _wgpuAdapterHasFeature(adapterPtr,featureEnumValue){adapterPtr=bigintToI53Checked(adapterPtr);var adapter=WebGPU.getJsObject(adapterPtr);return adapter.features.has(WebGPU.FeatureName[featureEnumValue])}var _wgpuBufferGetSize=function(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);return buffer.size})();return BigInt(ret)};var _wgpuCommandEncoderBeginComputePass=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),timestampWrites:WebGPU.makePassTimestampWrites(Number((growMemViews(),HEAPU64)[(descriptor+24)/8]))}}var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateComputePassEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.beginComputePass(desc));return ptr})();return BigInt(ret)};function _wgpuCommandEncoderCopyBufferToBuffer(encoderPtr,srcPtr,srcOffset,dstPtr,dstOffset,size){encoderPtr=bigintToI53Checked(encoderPtr);srcPtr=bigintToI53Checked(srcPtr);srcOffset=bigintToI53Checked(srcOffset);dstPtr=bigintToI53Checked(dstPtr);dstOffset=bigintToI53Checked(dstOffset);size=bigintToI53Checked(size);var commandEncoder=WebGPU.getJsObject(encoderPtr);var src=WebGPU.getJsObject(srcPtr);var dst=WebGPU.getJsObject(dstPtr);commandEncoder.copyBufferToBuffer(src,srcOffset,dst,dstOffset,size)}var _wgpuCommandEncoderFinish=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateCommandBuffer(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.finish());return ptr})();return BigInt(ret)};function _wgpuComputePassEncoderDispatchWorkgroups(passPtr,x,y,z){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.dispatchWorkgroups(x,y,z)}function _wgpuComputePassEncoderEnd(passPtr){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.end()}function _wgpuComputePassEncoderSetBindGroup(passPtr,groupIndex,groupPtr,dynamicOffsetCount,dynamicOffsetsPtr){passPtr=bigintToI53Checked(passPtr);groupPtr=bigintToI53Checked(groupPtr);dynamicOffsetCount=bigintToI53Checked(dynamicOffsetCount);dynamicOffsetsPtr=bigintToI53Checked(dynamicOffsetsPtr);var pass=WebGPU.getJsObject(passPtr);var group=WebGPU.getJsObject(groupPtr);if(dynamicOffsetCount==0){pass.setBindGroup(groupIndex,group)}else{pass.setBindGroup(groupIndex,group,(growMemViews(),HEAPU32),dynamicOffsetsPtr/4,dynamicOffsetCount)}}function _wgpuComputePassEncoderSetPipeline(passPtr,pipelinePtr){passPtr=bigintToI53Checked(passPtr);pipelinePtr=bigintToI53Checked(pipelinePtr);var pass=WebGPU.getJsObject(passPtr);var pipeline=WebGPU.getJsObject(pipelinePtr);pass.setPipeline(pipeline)}var _wgpuComputePipelineGetBindGroupLayout=function(pipelinePtr,groupIndex){pipelinePtr=bigintToI53Checked(pipelinePtr);var ret=(()=>{var pipeline=WebGPU.getJsObject(pipelinePtr);var ptr=_emwgpuCreateBindGroupLayout(0n);WebGPU.Internals.jsObjectInsert(ptr,pipeline.getBindGroupLayout(groupIndex));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateBindGroup=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{function makeEntry(entryPtr){var bufferPtr=Number((growMemViews(),HEAPU64)[(entryPtr+16)/8]);var samplerPtr=Number((growMemViews(),HEAPU64)[(entryPtr+40)/8]);var textureViewPtr=Number((growMemViews(),HEAPU64)[(entryPtr+48)/8]);var externalTexturePtr=0;WebGPU.iterateExtensions(entryPtr,{327681:ptr=>{externalTexturePtr=Number((growMemViews(),HEAPU64)[(ptr+16)/8])}});var resource;if(bufferPtr){var size=readI53FromI64(entryPtr+32);if(size==-1)size=undefined;resource={buffer:WebGPU.getJsObject(bufferPtr),offset:readI53FromI64(entryPtr+24),size}}else{resource=WebGPU.getJsObject(samplerPtr||textureViewPtr||externalTexturePtr)}return{binding:(growMemViews(),HEAPU32)[(entryPtr+8)/4],resource}}function makeEntries(count,entriesPtrs){var entries=[];for(var i=0;i<count;++i){entries.push(makeEntry(entriesPtrs+56*i))}return entries}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),entries:makeEntries(Number((growMemViews(),HEAPU64)[(descriptor+32)/8]),Number((growMemViews(),HEAPU64)[(descriptor+40)/8]))};var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateBindGroup(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createBindGroup(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateCommandEncoder=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8)}}var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateCommandEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createCommandEncoder(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateComputePipeline=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc=WebGPU.makeComputePipelineDesc(descriptor);var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateComputePipeline(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createComputePipeline(desc));return ptr})();return BigInt(ret)};function _wgpuInstanceHasWGSLLanguageFeature(instance,featureEnumValue){instance=bigintToI53Checked(instance);if(!("wgslLanguageFeatures"in navigator.gpu)){return false}return navigator.gpu.wgslLanguageFeatures.has(WebGPU.WGSLLanguageFeatureName[featureEnumValue])}var _wgpuQueueSubmit=function(queuePtr,commandCount,commands){queuePtr=bigintToI53Checked(queuePtr);commandCount=bigintToI53Checked(commandCount);commands=bigintToI53Checked(commands);var queue=WebGPU.getJsObject(queuePtr);var cmds=Array.from((growMemViews(),HEAP64).subarray(commands/8,(commands+commandCount*8)/8),id=>WebGPU.getJsObject(id));queue.submit(cmds)};function _wgpuQueueWriteBuffer(queuePtr,bufferPtr,bufferOffset,data,size){queuePtr=bigintToI53Checked(queuePtr);bufferPtr=bigintToI53Checked(bufferPtr);bufferOffset=bigintToI53Checked(bufferOffset);data=bigintToI53Checked(data);size=bigintToI53Checked(size);var queue=WebGPU.getJsObject(queuePtr);var buffer=WebGPU.getJsObject(bufferPtr);var subarray=(growMemViews(),HEAPU8).subarray(data,data+size);queue.writeBuffer(buffer,bufferOffset,subarray,0,size)}var Asyncify={instrumentWasmImports(imports){var importPattern=/^(invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x);if(isAsyncifyImport){imports[x]=original=new WebAssembly.Suspending(original)}}}},instrumentFunction(original){var wrapper=(...args)=>original(...args);return wrapper},instrumentWasmExports(exports){var exportPattern=/^(wllama_start|wllama_action|main|__main_argc_argv)$/;Asyncify.asyncExports=new Set;var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){let isAsyncifyExport=exportPattern.test(x);if(isAsyncifyExport){Asyncify.asyncExports.add(original);original=Asyncify.makeAsyncFunction(original)}var wrapper=Asyncify.instrumentFunction(original);ret[x]=wrapper}else{ret[x]=original}}return ret},asyncExports:null,isAsyncExport(func){return Asyncify.asyncExports?.has(func)},handleAsync:async startAsync=>{runtimeKeepalivePush();try{return await startAsync()}finally{runtimeKeepalivePop()}},handleSleep:startAsync=>Asyncify.handleAsync(()=>new Promise(startAsync)),makeAsyncFunction(original){return WebAssembly.promising(original)}};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{(growMemViews(),HEAP8).set(array,buffer)};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={pointer:p=>BigInt(p),string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return BigInt(ret)},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return BigInt(ret)}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(Number(ret))}if(returnType==="pointer")return Number(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;if(asyncMode)return ret.then(onDone);ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var FS_createPath=(...args)=>FS.createPath(...args);var FS_unlink=(...args)=>FS.unlink(...args);var FS_createLazyFile=(...args)=>FS.createLazyFile(...args);var FS_createDevice=(...args)=>FS.createDevice(...args);PThread.init();FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();{initMemory();if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["ENV"]=ENV;Module["mmapAlloc"]=mmapAlloc;Module["wasmMemory"]=wasmMemory;Module["addRunDependency"]=addRunDependency;Module["removeRunDependency"]=removeRunDependency;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["FS_preloadFile"]=FS_preloadFile;Module["FS_unlink"]=FS_unlink;Module["FS_createPath"]=FS_createPath;Module["FS_createDevice"]=FS_createDevice;Module["FS"]=FS;Module["FS_createDataFile"]=FS_createDataFile;Module["FS_createLazyFile"]=FS_createLazyFile;Module["MEMFS"]=MEMFS;var proxiedFunctionTable=[_proc_exit,exitOnMainThread,pthreadCreateProxied,___syscall_fcntl64,___syscall_fstat64,___syscall_getcwd,___syscall_getdents64,___syscall_ioctl,___syscall_lstat64,___syscall_newfstatat,___syscall_openat,___syscall_stat64,__mmap_js,__munmap_js,_environ_get,_environ_sizes_get,_fd_close,_fd_read,_fd_seek,_fd_write];function __asyncjs__js_file_read(path_ptr,offset,req_size,out_ptr){return Asyncify.handleAsync(async()=>await _wllama_js_file_read(UTF8ToString(Number(path_ptr)),Number(offset),Number(req_size),Number(out_ptr)))}__asyncjs__js_file_read.sig="jjjjj";var _malloc,_free,_wllama_malloc,_wllama_start,_wllama_action,_wllama_exit,_wllama_debug,_main,_emwgpuCreateBindGroup,_emwgpuCreateBindGroupLayout,_emwgpuCreateCommandBuffer,_emwgpuCreateCommandEncoder,_emwgpuCreateComputePassEncoder,_emwgpuCreateComputePipeline,_emwgpuCreateExternalTexture,_emwgpuCreatePipelineLayout,_emwgpuCreateQuerySet,_emwgpuCreateRenderBundle,_emwgpuCreateRenderBundleEncoder,_emwgpuCreateRenderPassEncoder,_emwgpuCreateRenderPipeline,_emwgpuCreateSampler,_emwgpuCreateSurface,_emwgpuCreateTexture,_emwgpuCreateTextureView,_emwgpuCreateAdapter,_emwgpuCreateBuffer,_emwgpuCreateDevice,_emwgpuCreateQueue,_emwgpuCreateShaderModule,_emwgpuOnDeviceLostCompleted,_emwgpuOnMapAsyncCompleted,_emwgpuOnRequestAdapterCompleted,_emwgpuOnRequestDeviceCompleted,_emwgpuOnWorkDoneCompleted,_emwgpuOnUncapturedError,__emscripten_tls_init,_pthread_self,_emscripten_builtin_memalign,__emscripten_thread_init,__emscripten_thread_crashed,__emscripten_run_js_on_main_thread,__emscripten_thread_free_data,__emscripten_thread_exit,__emscripten_check_mailbox,_memalign,___trap,_emscripten_stack_set_limits,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,__indirect_function_table,wasmTable;function assignWasmExports(wasmExports){_malloc=wasmExports["malloc"];_free=wasmExports["free"];_wllama_malloc=Module["_wllama_malloc"]=wasmExports["wllama_malloc"];_wllama_start=Module["_wllama_start"]=wasmExports["wllama_start"];_wllama_action=Module["_wllama_action"]=wasmExports["wllama_action"];_wllama_exit=Module["_wllama_exit"]=wasmExports["wllama_exit"];_wllama_debug=Module["_wllama_debug"]=wasmExports["wllama_debug"];_main=Module["_main"]=wasmExports["main"];_emwgpuCreateBindGroup=wasmExports["emwgpuCreateBindGroup"];_emwgpuCreateBindGroupLayout=wasmExports["emwgpuCreateBindGroupLayout"];_emwgpuCreateCommandBuffer=wasmExports["emwgpuCreateCommandBuffer"];_emwgpuCreateCommandEncoder=wasmExports["emwgpuCreateCommandEncoder"];_emwgpuCreateComputePassEncoder=wasmExports["emwgpuCreateComputePassEncoder"];_emwgpuCreateComputePipeline=wasmExports["emwgpuCreateComputePipeline"];_emwgpuCreateExternalTexture=wasmExports["emwgpuCreateExternalTexture"];_emwgpuCreatePipelineLayout=wasmExports["emwgpuCreatePipelineLayout"];_emwgpuCreateQuerySet=wasmExports["emwgpuCreateQuerySet"];_emwgpuCreateRenderBundle=wasmExports["emwgpuCreateRenderBundle"];_emwgpuCreateRenderBundleEncoder=wasmExports["emwgpuCreateRenderBundleEncoder"];_emwgpuCreateRenderPassEncoder=wasmExports["emwgpuCreateRenderPassEncoder"];_emwgpuCreateRenderPipeline=wasmExports["emwgpuCreateRenderPipeline"];_emwgpuCreateSampler=wasmExports["emwgpuCreateSampler"];_emwgpuCreateSurface=wasmExports["emwgpuCreateSurface"];_emwgpuCreateTexture=wasmExports["emwgpuCreateTexture"];_emwgpuCreateTextureView=wasmExports["emwgpuCreateTextureView"];_emwgpuCreateAdapter=wasmExports["emwgpuCreateAdapter"];_emwgpuCreateBuffer=wasmExports["emwgpuCreateBuffer"];_emwgpuCreateDevice=wasmExports["emwgpuCreateDevice"];_emwgpuCreateQueue=wasmExports["emwgpuCreateQueue"];_emwgpuCreateShaderModule=wasmExports["emwgpuCreateShaderModule"];_emwgpuOnDeviceLostCompleted=wasmExports["emwgpuOnDeviceLostCompleted"];_emwgpuOnMapAsyncCompleted=wasmExports["emwgpuOnMapAsyncCompleted"];_emwgpuOnRequestAdapterCompleted=wasmExports["emwgpuOnRequestAdapterCompleted"];_emwgpuOnRequestDeviceCompleted=wasmExports["emwgpuOnRequestDeviceCompleted"];_emwgpuOnWorkDoneCompleted=wasmExports["emwgpuOnWorkDoneCompleted"];_emwgpuOnUncapturedError=wasmExports["emwgpuOnUncapturedError"];__emscripten_tls_init=wasmExports["_emscripten_tls_init"];_pthread_self=wasmExports["pthread_self"];_emscripten_builtin_memalign=wasmExports["emscripten_builtin_memalign"];__emscripten_thread_init=wasmExports["_emscripten_thread_init"];__emscripten_thread_crashed=wasmExports["_emscripten_thread_crashed"];__emscripten_run_js_on_main_thread=wasmExports["_emscripten_run_js_on_main_thread"];__emscripten_thread_free_data=wasmExports["_emscripten_thread_free_data"];__emscripten_thread_exit=wasmExports["_emscripten_thread_exit"];__emscripten_check_mailbox=wasmExports["_emscripten_check_mailbox"];_memalign=wasmExports["memalign"];___trap=wasmExports["__trap"];_emscripten_stack_set_limits=wasmExports["emscripten_stack_set_limits"];__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"];__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"];_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"];__indirect_function_table=wasmTable=wasmExports["__indirect_function_table"]}var wasmImports;function assignWasmImports(){wasmImports={__asyncjs__js_file_read,__pthread_create_js:___pthread_create_js,__syscall_fcntl64:___syscall_fcntl64,__syscall_getcwd:___syscall_getcwd,__syscall_getdents64:___syscall_getdents64,__syscall_ioctl:___syscall_ioctl,__syscall_openat:___syscall_openat,__syscall_stat64:___syscall_stat64,_abort_js:__abort_js,_emscripten_init_main_thread_js:__emscripten_init_main_thread_js,_emscripten_notify_mailbox_postmessage:__emscripten_notify_mailbox_postmessage,_emscripten_receive_on_main_thread_js:__emscripten_receive_on_main_thread_js,_emscripten_thread_cleanup:__emscripten_thread_cleanup,_emscripten_thread_mailbox_await:__emscripten_thread_mailbox_await,_emscripten_thread_set_strongref:__emscripten_thread_set_strongref,_localtime_js:__localtime_js,_mmap_js:__mmap_js,_munmap_js:__munmap_js,_tzset_js:__tzset_js,clock_time_get:_clock_time_get,emscripten_check_blocking_allowed:_emscripten_check_blocking_allowed,emscripten_date_now:_emscripten_date_now,emscripten_exit_with_live_runtime:_emscripten_exit_with_live_runtime,emscripten_get_callstack:_emscripten_get_callstack,emscripten_get_heap_max:_emscripten_get_heap_max,emscripten_get_now:_emscripten_get_now,emscripten_has_asyncify:_emscripten_has_asyncify,emscripten_num_logical_cores:_emscripten_num_logical_cores,emscripten_resize_heap:_emscripten_resize_heap,emwgpuAdapterRequestDevice:_emwgpuAdapterRequestDevice,emwgpuBufferDestroy:_emwgpuBufferDestroy,emwgpuBufferGetConstMappedRange:_emwgpuBufferGetConstMappedRange,emwgpuBufferMapAsync:_emwgpuBufferMapAsync,emwgpuBufferUnmap:_emwgpuBufferUnmap,emwgpuDelete:_emwgpuDelete,emwgpuDeviceCreateBuffer:_emwgpuDeviceCreateBuffer,emwgpuDeviceCreateShaderModule:_emwgpuDeviceCreateShaderModule,emwgpuDeviceDestroy:_emwgpuDeviceDestroy,emwgpuInstanceRequestAdapter:_emwgpuInstanceRequestAdapter,emwgpuQueueOnSubmittedWorkDone:_emwgpuQueueOnSubmittedWorkDone,emwgpuWaitAny:_emwgpuWaitAny,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,exit:_exit,fd_close:_fd_close,fd_read:_fd_read,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,random_get:_random_get,wgpuAdapterGetInfo:_wgpuAdapterGetInfo,wgpuAdapterGetLimits:_wgpuAdapterGetLimits,wgpuAdapterHasFeature:_wgpuAdapterHasFeature,wgpuBufferGetSize:_wgpuBufferGetSize,wgpuCommandEncoderBeginComputePass:_wgpuCommandEncoderBeginComputePass,wgpuCommandEncoderCopyBufferToBuffer:_wgpuCommandEncoderCopyBufferToBuffer,wgpuCommandEncoderFinish:_wgpuCommandEncoderFinish,wgpuComputePassEncoderDispatchWorkgroups:_wgpuComputePassEncoderDispatchWorkgroups,wgpuComputePassEncoderEnd:_wgpuComputePassEncoderEnd,wgpuComputePassEncoderSetBindGroup:_wgpuComputePassEncoderSetBindGroup,wgpuComputePassEncoderSetPipeline:_wgpuComputePassEncoderSetPipeline,wgpuComputePipelineGetBindGroupLayout:_wgpuComputePipelineGetBindGroupLayout,wgpuDeviceCreateBindGroup:_wgpuDeviceCreateBindGroup,wgpuDeviceCreateCommandEncoder:_wgpuDeviceCreateCommandEncoder,wgpuDeviceCreateComputePipeline:_wgpuDeviceCreateComputePipeline,wgpuInstanceHasWGSLLanguageFeature:_wgpuInstanceHasWGSLLanguageFeature,wgpuQueueSubmit:_wgpuQueueSubmit,wgpuQueueWriteBuffer:_wgpuQueueWriteBuffer}}function applySignatureConversions(wasmExports){wasmExports=Object.assign({},wasmExports);var makeWrapper_pp=f=>a0=>Number(f(BigInt(a0)));var makeWrapper__p=f=>a0=>f(BigInt(a0));var makeWrapper___PP=f=>(a0,a1,a2)=>f(a0,BigInt(a1?a1:0),BigInt(a2?a2:0));var makeWrapper_p=f=>()=>Number(f());var makeWrapper_ppp=f=>(a0,a1)=>Number(f(BigInt(a0),BigInt(a1)));var makeWrapper__p_____=f=>(a0,a1,a2,a3,a4,a5)=>f(BigInt(a0),a1,a2,a3,a4,a5);var makeWrapper___p_p_=f=>(a0,a1,a2,a3,a4)=>f(a0,BigInt(a1),a2,BigInt(a3),a4);var makeWrapper__pp=f=>(a0,a1)=>f(BigInt(a0),BigInt(a1));wasmExports["malloc"]=makeWrapper_pp(wasmExports["malloc"]);wasmExports["free"]=makeWrapper__p(wasmExports["free"]);wasmExports["main"]=makeWrapper___PP(wasmExports["main"]);wasmExports["pthread_self"]=makeWrapper_p(wasmExports["pthread_self"]);wasmExports["emscripten_builtin_memalign"]=makeWrapper_ppp(wasmExports["emscripten_builtin_memalign"]);wasmExports["_emscripten_thread_init"]=makeWrapper__p_____(wasmExports["_emscripten_thread_init"]);wasmExports["_emscripten_run_js_on_main_thread"]=makeWrapper___p_p_(wasmExports["_emscripten_run_js_on_main_thread"]);wasmExports["_emscripten_thread_free_data"]=makeWrapper__p(wasmExports["_emscripten_thread_free_data"]);wasmExports["_emscripten_thread_exit"]=makeWrapper__p(wasmExports["_emscripten_thread_exit"]);wasmExports["memalign"]=makeWrapper_ppp(wasmExports["memalign"]);wasmExports["emscripten_stack_set_limits"]=makeWrapper__pp(wasmExports["emscripten_stack_set_limits"]);wasmExports["_emscripten_stack_restore"]=makeWrapper__p(wasmExports["_emscripten_stack_restore"]);wasmExports["_emscripten_stack_alloc"]=makeWrapper_pp(wasmExports["_emscripten_stack_alloc"]);wasmExports["emscripten_stack_get_current"]=makeWrapper_p(wasmExports["emscripten_stack_get_current"]);return wasmExports}async function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,BigInt(argv));ret=await ret;exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}if(ENVIRONMENT_IS_PTHREAD){initRuntime();return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}async function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)await callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;if(!ENVIRONMENT_IS_PTHREAD){createWasm();run()}\n';

// src/worker.ts
var FILE_READ_REQ_EVENT = "fs.read_req";
var JSPI_STUB = `
if (!WebAssembly.Suspending) {
  // JSPI not available - stubs that keep the import/export tables valid.
  // Suspending wraps imports: identity is fine since async imports won't be called.
  WebAssembly.Suspending = function (fn) {
    // console.log(fn.toString());
    return fn;
  };
  // promising wraps exports: must return a Promise so ccall's ret.then() works.
  WebAssembly.promising = function (fn) {
    return function (...args) {
      try {
        return Promise.resolve(fn(...args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  };
}
`;
var ProxyToWorker = class {
  // filename -> Blob for async reads
  constructor(resources, nbThread, suppressNativeLog, logger) {
    __publicField(this, "resources");
    __publicField(this, "logger");
    __publicField(this, "suppressNativeLog");
    __publicField(this, "taskQueue", []);
    __publicField(this, "taskId", 1);
    __publicField(this, "resultQueue", []);
    __publicField(this, "busy", false);
    // is the work loop is running?
    __publicField(this, "worker");
    __publicField(this, "multiThread");
    __publicField(this, "nbThread");
    __publicField(this, "useAsyncFile");
    __publicField(this, "fileBlobs", /* @__PURE__ */ new Map());
    this.resources = resources;
    this.nbThread = nbThread;
    this.multiThread = nbThread > 0;
    this.logger = logger;
    this.suppressNativeLog = suppressNativeLog;
    this.useAsyncFile = canUseAsyncFileRead(resources.compat);
  }
  getModuleCode() {
    return __async(this, null, function* () {
      if (!this.resources.jsPath) {
        if (this.resources.compat) {
          throw new Error(
            "compat mode is enabled but no jsPath was provided. Pass a worker JS via setCompat() or install @wllama/wllama-compat."
          );
        }
        return WLLAMA_EMSCRIPTEN_CODE;
      } else if (this.resources.jsPath.code) {
        return this.resources.jsPath.code;
      } else if (isString(this.resources.jsPath)) {
        const response = yield fetch(this.resources.jsPath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch worker code from ${this.resources.jsPath}`
          );
        }
        return yield response.text();
      } else {
        throw new Error("No JS code provided for worker");
      }
    });
  }
  moduleInit(ggufFiles) {
    return __async(this, null, function* () {
      let moduleCode = JSPI_STUB + (yield this.getModuleCode());
      let mainModuleCode = moduleCode.replace("var Module", "var ___Module");
      const runOptions = {
        pathConfig: {
          "wllama.wasm": this.resources.wasmPath
        },
        nbThread: this.nbThread,
        compat: this.resources.compat
      };
      const completeCode = [
        `const RUN_OPTIONS = ${JSON.stringify(runOptions)};`,
        `function wModuleInit() { ${mainModuleCode}; return Module; }`,
        LLAMA_CPP_WORKER_CODE
      ].join(";\n\n");
      this.worker = createWorker(completeCode);
      this.worker.onmessage = this.onRecvMsg.bind(this);
      this.worker.onerror = this.logger.error;
      const res = yield this.pushTask({
        verb: "module.init",
        args: [
          new Blob([moduleCode], { type: "text/javascript" }),
          this.useAsyncFile
        ],
        callbackId: this.taskId++
      });
      const nativeFiles = [];
      for (const file of ggufFiles) {
        const needAllocBuffer = !this.useAsyncFile;
        const id = yield this.fileAlloc(
          file.name,
          file.blob.size,
          needAllocBuffer
        );
        nativeFiles.push(__spreadValues({ id }, file));
        if (this.useAsyncFile) {
          this.fileBlobs.set(file.name, file.blob);
        }
      }
      if (!this.useAsyncFile) {
        yield Promise.all(
          nativeFiles.map((file) => {
            return this.fileWrite(file.id, file.blob);
          })
        );
      }
      return res;
    });
  }
  wllamaStart() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.start",
        args: [],
        callbackId: this.taskId++
      });
      const parsedResult = this.parseResult(result);
      return parsedResult;
    });
  }
  wllamaAction(name, body) {
    return __async(this, null, function* () {
      const encodedMsg = glueSerialize(body);
      const result = yield this.pushTask({
        verb: "wllama.action",
        args: [name, encodedMsg],
        callbackId: this.taskId++
      });
      const parsedResult = glueDeserialize(result);
      return parsedResult;
    });
  }
  wllamaExit() {
    return __async(this, null, function* () {
      if (this.worker) {
        this.worker.terminate();
      }
    });
  }
  wllamaDebug() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.debug",
        args: [],
        callbackId: this.taskId++
      });
      return JSON.parse(result);
    });
  }
  ///////////////////////////////////////
  /**
   * Allocate a new file in heapfs
   * @returns fileId, to be used by fileWrite()
   */
  fileAlloc(fileName, size, allocBuffer) {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "fs.alloc",
        args: [fileName, size, allocBuffer],
        callbackId: this.taskId++
      });
      return result.fileId;
    });
  }
  /**
   * Write a Blob to heapfs
   */
  fileWrite(fileId, blob) {
    return __async(this, null, function* () {
      const reader = blob.stream().getReader();
      let offset = 0;
      while (true) {
        const { done, value } = yield reader.read();
        if (done) break;
        const size = value.byteLength;
        yield this.pushTask(
          {
            verb: "fs.write",
            args: [fileId, value, offset],
            callbackId: this.taskId++
          },
          // @ts-ignore Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'
          [value.buffer]
        );
        offset += size;
      }
    });
  }
  fileReadResponse(name, offset, size) {
    return __async(this, null, function* () {
      var _a;
      try {
        const blob = this.fileBlobs.get(name);
        if (!blob) {
          throw new Error(`blob not found for name="${name}"`);
        }
        const chunk = blob.slice(offset, offset + size);
        const buffer = yield chunk.arrayBuffer();
        this.worker.postMessage(
          { verb: "fs.read_res", args: [buffer] },
          { transfer: [buffer] }
        );
      } catch (err) {
        this.logger.error("fileReadResponse failed, terminating worker:", err);
        (_a = this.worker) == null ? void 0 : _a.terminate();
        this.worker = void 0;
        this.abort(`File read failed: ${err}`, err.stack || "");
      }
    });
  }
  /**
   * Parse JSON result returned by cpp code.
   * Throw new Error if "__exception" is present in the response
   *
   * TODO: get rid of this function once everything is migrated to Glue
   */
  parseResult(result) {
    const parsedResult = JSON.parse(result);
    if (parsedResult && parsedResult["error"]) {
      throw new WllamaRuntimeError("Unknown error, please see console.log", "");
    }
    return parsedResult;
  }
  /**
   * Push a new task to taskQueue
   */
  pushTask(param, buffers) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ resolve, reject, param, buffers });
      this.runTaskLoop();
    });
  }
  /**
   * Main loop for processing tasks
   */
  runTaskLoop() {
    return __async(this, null, function* () {
      var _a;
      if (this.busy) {
        return;
      }
      this.busy = true;
      while (true) {
        const task = this.taskQueue.shift();
        if (!task) break;
        this.resultQueue.push(task);
        this.worker.postMessage(
          task.param,
          isSafariMobile() ? void 0 : {
            transfer: (_a = task.buffers) != null ? _a : []
          }
        );
      }
      this.busy = false;
    });
  }
  /**
   * Handle messages from worker
   */
  onRecvMsg(e) {
    if (!e.data) return;
    const { verb, args } = e.data;
    const isCompatBuild = this.resources.compat;
    if (verb && verb.startsWith("console.")) {
      if (this.suppressNativeLog) {
        return;
      }
      if (verb.endsWith("debug")) this.logger.debug(...args);
      if (verb.endsWith("log")) this.logger.log(...args);
      if (verb.endsWith("warn")) this.logger.warn(...args);
      if (verb.endsWith("error")) this.logger.error(...args);
      return;
    } else if (verb === "signal.abort") {
      const [signalType, message, rawStack, originalErr] = args;
      if (originalErr) {
        this.logger.error(originalErr);
      }
      (() => __async(this, null, function* () {
        let stack = "";
        let newMsg = message.replace(
          "Build with -sASSERTIONS for more info.",
          ""
        );
        if (signalType === "abort") {
          newMsg = `(ABORT) ${newMsg}`;
          stack = rawStack.replace(/\|/g, "\n");
        } else if (signalType === "exception") {
          stack = rawStack;
        }
        const decoded = yield Debug.decodeStackTrace(stack, isCompatBuild);
        this.logger.error(`Stack trace (${signalType}):
` + decoded);
        this.abort(newMsg, decoded);
      }))();
      return;
    }
    if (verb === FILE_READ_REQ_EVENT) {
      const [name, offset, size] = args;
      this.fileReadResponse(name, offset, size).catch(() => {
      });
      return;
    }
    const { callbackId, result, err } = e.data;
    if (callbackId) {
      const idx = this.resultQueue.findIndex(
        (t) => t.param.callbackId === callbackId
      );
      if (idx !== -1) {
        const waitingTask = this.resultQueue.splice(idx, 1)[0];
        if (err) waitingTask.reject(err);
        else waitingTask.resolve(result);
      } else {
        this.logger.error(
          `Cannot find waiting task with callbackId = ${callbackId}`
        );
      }
    }
  }
  abort(text, stack) {
    const error = new WllamaRuntimeError(
      text.length == 0 ? "(unknown error)" : text,
      stack
    );
    while (this.resultQueue.length > 0) {
      const waitingTask = this.resultQueue.pop();
      if (!waitingTask) break;
      waitingTask.reject(error);
    }
    while (this.taskQueue.length > 0) {
      const pendingTask = this.taskQueue.pop();
      if (!pendingTask) break;
      pendingTask.reject(error);
    }
  }
};

// src/huggingface.ts
var HF_BASE = "https://huggingface.co";
var DEFAULT_QUANTS = ["Q4_K_M", "Q8_0"];
function fetchRepoFiles(repo, token) {
  return __async(this, null, function* () {
    var _a;
    const url = `${HF_BASE}/api/models/${repo}/tree/main?recursive=true`;
    const headers = { Accept: "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = yield fetch(url, { headers });
    if (!res.ok) {
      let msg = res.statusText;
      try {
        msg = (_a = (yield res.json()).error) != null ? _a : msg;
      } catch (e) {
      }
      throw new Error(`HF API error (${res.status}): ${msg}`);
    }
    return res.json();
  });
}
function firstShardPath(files, path) {
  const m = path.match(/^(.+)-(\d{5})-of-(\d{5})\.gguf$/i);
  if (!m) return path;
  const first = `${m[1]}-00001-of-${m[3]}.gguf`;
  return files.some((f) => f.path === first) ? first : path;
}
function selectFile(files, quant, mmprojOnly) {
  const candidates = files.filter((f) => {
    if (f.type !== "file" || !f.path.toLowerCase().endsWith(".gguf"))
      return false;
    const ismmproj = f.path.toLowerCase().includes("mmproj");
    return mmprojOnly ? ismmproj : !ismmproj;
  });
  if (candidates.length === 0) return null;
  if (quant) {
    const upper = quant.toUpperCase();
    const match = candidates.find((f) => f.path.toUpperCase().includes(upper));
    if (match) return firstShardPath(candidates, match.path);
    return null;
  }
  for (const q of DEFAULT_QUANTS) {
    const match = candidates.find((f) => f.path.toUpperCase().includes(q));
    if (match) return firstShardPath(candidates, match.path);
  }
  return firstShardPath(candidates, candidates[0].path);
}
function getHFModelSource(config) {
  return __async(this, null, function* () {
    const { repo, file, quant, mmprojFile, mmprojQuant, hfToken } = config;
    const files = yield fetchRepoFiles(repo, hfToken);
    const modelPath = file != null ? file : selectFile(files, quant, false);
    if (!modelPath) {
      throw new Error(`No GGUF file found in repo "${repo}"`);
    }
    const source = {
      url: `${HF_BASE}/${repo}/resolve/main/${modelPath}`
    };
    if (mmprojFile || mmprojQuant !== void 0) {
      const mmpath = mmprojFile != null ? mmprojFile : selectFile(files, mmprojQuant, true);
      if (mmpath) {
        source.mmprojUrl = `${HF_BASE}/${repo}/resolve/main/${mmpath}`;
      }
    }
    if (hfToken) {
      const params = new URLSearchParams({ token: hfToken });
      source.url += `?${params}`;
      if (source.mmprojUrl) {
        source.mmprojUrl += `?${params}`;
      }
    }
    return source;
  });
}
function getHFFileSHA256(url, headers) {
  return __async(this, null, function* () {
    if (!url.includes("/resolve/")) return void 0;
    const rawUrl = url.replace("/resolve/", "/raw/");
    try {
      const text = yield fetch(rawUrl, { headers }).then((r) => r.text());
      const match = text.match(/^oid sha256:([0-9a-f]{64})$/m);
      return match ? match[1] : void 0;
    } catch (e) {
      return void 0;
    }
  });
}

// src/storage/opfs.ts
var OPFSBackend = class {
  isSupported() {
    var _a;
    return typeof navigator !== "undefined" && "storage" in navigator && !!((_a = navigator.storage) == null ? void 0 : _a.getDirectory);
  }
  read(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        return yield fileHandle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  write(key, stream) {
    return __async(this, null, function* () {
      const writable = yield openWritable(key);
      yield writable.truncate(0);
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        const file = yield fileHandle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      const cacheDir = yield getCacheDir();
      const result = [];
      try {
        for (var iter = __forAwait(cacheDir.entries()), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const [name, handle] = temp.value;
          if (handle.kind === "file") {
            const file = yield handle.getFile();
            result.push({ key: name, size: file.size });
          }
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return result;
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        yield cacheDir.removeEntry(key);
      } catch (e) {
        if ((e == null ? void 0 : e.name) !== "NotFoundError") throw e;
      }
    });
  }
};
function getCacheDir() {
  return __async(this, null, function* () {
    const opfsRoot = yield navigator.storage.getDirectory();
    return opfsRoot.getDirectoryHandle("cache", { create: true });
  });
}
function openWritable(fileName) {
  return __async(this, null, function* () {
    const worker = createWorker(OPFS_UTILS_WORKER_CODE);
    let pResolve;
    let pReject;
    worker.onmessage = (e) => {
      if (e.data.ok) pResolve(null);
      else if (e.data.err) pReject(e.data.err);
    };
    worker.onerror = (e) => {
      var _a;
      return pReject == null ? void 0 : pReject((_a = e.message) != null ? _a : e);
    };
    const workerExec = (data) => new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject;
      worker.postMessage(
        data,
        isSafariMobile() ? void 0 : { transfer: "buf" in data && data.buf ? [data.buf.buffer] : [] }
      );
    });
    yield workerExec({ action: "open", filename: fileName });
    return {
      truncate: () => __async(this, null, function* () {
      }),
      write: (value) => workerExec({ action: "write", buf: value }),
      close: () => __async(this, null, function* () {
        yield workerExec({ action: "close" });
        worker.terminate();
      })
    };
  });
}

// src/storage/cos.ts
function makeHash(key) {
  return { algorithm: "SHA-256", value: key };
}
var COSInternalBackend = class {
  isSupported() {
    return typeof navigator !== "undefined" && "crossOriginStorage" in navigator;
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  read(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.requestFileHandle(
          makeHash(key)
        );
        return handle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  write(key, stream) {
    return __async(this, null, function* () {
      const handle = yield navigator.crossOriginStorage.requestFileHandle(
        makeHash(key),
        { create: true }
      );
      const writable = yield handle.createWritable();
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.requestFileHandle(
          makeHash(key)
        );
        const file = yield handle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
  delete(_key) {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
};
var COSBackend = class {
  constructor() {
    __publicField(this, "cos", new COSInternalBackend());
    __publicField(this, "priv", new OPFSBackend());
  }
  isSupported() {
    return this.priv.isSupported();
  }
  read(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const blob = yield this.cos.read(hint.sha256);
        if (blob) return blob;
      }
      return this.priv.read(key);
    });
  }
  write(key, stream, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        yield this.cos.write(hint.sha256, stream);
      } else {
        yield this.priv.write(key, stream);
      }
    });
  }
  getSize(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const size = yield this.cos.getSize(hint.sha256);
        if (size !== -1) return size;
      }
      return this.priv.getSize(key);
    });
  }
  list() {
    return __async(this, null, function* () {
      return this.priv.list();
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      return this.priv.delete(key);
    });
  }
};

// src/cache-manager.ts
var PREFIX_METADATA = "__metadata__";
var POLYFILL_ETAG = "polyfill_for_older_version";
function hintFromMetadata(metadata) {
  if (!metadata) return void 0;
  if (metadata.sha256) return { sha256: metadata.sha256 };
  return void 0;
}
var CacheManager = class {
  /**
   * @param backends Array of storage backends to use, in order of preference ; if first is available, use it, otherwise try the next one.
   */
  constructor(backends = [new COSBackend()]) {
    __publicField(this, "sb");
    for (const backend of backends) {
      if (backend.isSupported()) {
        this.sb = backend;
        return;
      }
    }
    throw new Error("No supported storage backend found");
  }
  /**
   * Convert a given URL into a storage key.
   *
   * Format: `${hashSHA1(fullURL)}_${fileName}`
   */
  getNameFromURL(url) {
    return __async(this, null, function* () {
      return urlToFileName(url, "");
    });
  }
  /**
   * @deprecated Use `download()` instead
   *
   * Write a new file to cache. This will overwrite existing file.
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   */
  write(name, stream, metadata) {
    return __async(this, null, function* () {
      yield this.sb.write(name, stream);
      yield this.writeMetadata(name, metadata);
    });
  }
  download(_0) {
    return __async(this, arguments, function* (url, options = {}) {
      var _a, _b, _c;
      const fileKey = yield urlToFileName(url, "");
      const sha256 = yield getHFFileSHA256(url, (_a = options.headers) != null ? _a : {});
      const hint = sha256 ? { sha256 } : void 0;
      if (hint && (yield this.sb.getSize(fileKey, hint)) !== -1) {
        if (!(yield this.getMetadata(fileKey))) {
          const head = yield fetch(url, __spreadValues({
            method: "HEAD"
          }, options.headers ? { headers: options.headers } : {}));
          const contentLength2 = head.headers.get("content-length");
          const etag2 = (head.headers.get("etag") || "").replace(
            /[^A-Za-z0-9]/g,
            ""
          );
          yield this.writeMetadata(fileKey, __spreadValues({
            originalURL: url,
            originalSize: parseInt(contentLength2 != null ? contentLength2 : "0", 10),
            etag: etag2,
            sha256
          }, (_b = options.metadataAdditional) != null ? _b : {}));
        }
        return;
      }
      const response = yield fetch(url, __spreadValues(__spreadValues({}, options.headers ? { headers: options.headers } : {}), options.signal ? { signal: options.signal } : {}));
      if (!response.ok || !response.body) {
        throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
      }
      const contentLength = response.headers.get("content-length");
      const etag = (response.headers.get("etag") || "").replace(
        /[^A-Za-z0-9]/g,
        ""
      );
      const total = parseInt(contentLength != null ? contentLength : "0", 10);
      const progressCallback = options.progressCallback;
      let loaded = 0;
      let lastProgressAt = 0;
      const progressStream = new TransformStream({
        transform(chunk, controller) {
          loaded += chunk.byteLength;
          if (progressCallback) {
            const now = Date.now();
            if (now - lastProgressAt > 100) {
              lastProgressAt = now;
              progressCallback({ loaded, total });
            }
          }
          controller.enqueue(chunk);
        },
        flush() {
          progressCallback == null ? void 0 : progressCallback({ loaded, total: total || loaded });
        }
      });
      const metadata = __spreadValues({
        originalURL: url,
        originalSize: total,
        etag
      }, (_c = options.metadataAdditional) != null ? _c : {});
      if (sha256) {
        metadata.sha256 = sha256;
      }
      yield this.sb.write(
        fileKey,
        response.body.pipeThrough(progressStream),
        hint
      );
      yield this.writeMetadata(fileKey, metadata);
    });
  }
  /**
   * Open a file in cache for reading
   *
   * @param nameOrURL The file name returned by `getNameFromURL()` or `list()`, or the original URL of the remote file
   * @returns Blob, or null if file does not exist
   */
  open(nameOrURL) {
    return __async(this, null, function* () {
      const hint1 = hintFromMetadata(yield this.getMetadata(nameOrURL));
      const direct = yield this.sb.read(nameOrURL, hint1);
      if (direct) return direct;
      const key = yield urlToFileName(nameOrURL, "");
      const hint2 = hintFromMetadata(yield this.getMetadata(key));
      return this.sb.read(key, hint2);
    });
  }
  /**
   * Get the size of a file in stored cache
   *
   * NOTE: in case the download is stopped mid-way (i.e. user close browser tab), the file maybe corrupted, size maybe different from `metadata.originalSize`
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   * @returns number of bytes, or -1 if file does not exist
   */
  getSize(name) {
    return __async(this, null, function* () {
      const hint = hintFromMetadata(yield this.getMetadata(name));
      return this.sb.getSize(name, hint);
    });
  }
  /**
   * Get metadata of a cached file
   */
  getMetadata(name) {
    return __async(this, null, function* () {
      const blob = yield this.sb.read(`${PREFIX_METADATA}${name}`);
      const cachedSize = yield this.sb.getSize(name);
      if (!blob) {
        return cachedSize > 0 ? (
          // files created by older version of wllama don't have metadata; polyfill it
          {
            etag: POLYFILL_ETAG,
            originalSize: cachedSize,
            originalURL: ""
          }
        ) : (
          // cached file not found
          null
        );
      }
      try {
        return yield new Response(blob).json();
      } catch (e) {
        return null;
      }
    });
  }
  /**
   * List all files currently in cache
   */
  list() {
    return __async(this, null, function* () {
      const all = yield this.sb.list();
      const metadataMap = {};
      for (const { key } of all) {
        if (key.startsWith(PREFIX_METADATA)) {
          const blob = yield this.sb.read(key);
          if (blob) {
            const meta = yield new Response(blob).json().catch(() => null);
            metadataMap[key.slice(PREFIX_METADATA.length)] = meta;
          }
        }
      }
      const result = [];
      for (const { key, size } of all) {
        if (!key.startsWith(PREFIX_METADATA)) {
          result.push({
            name: key,
            size,
            metadata: metadataMap[key] || {
              originalSize: size,
              originalURL: "",
              etag: ""
            }
          });
        }
      }
      return result;
    });
  }
  /**
   * Clear all files currently in cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.deleteMany(() => true);
    });
  }
  /**
   * Delete a single file in cache
   *
   * @param nameOrURL Can be either an URL or a name returned by `getNameFromURL()` or `list()`
   */
  delete(nameOrURL) {
    return __async(this, null, function* () {
      const name2 = yield this.getNameFromURL(nameOrURL);
      yield this.deleteMany(
        (entry) => entry.name === nameOrURL || entry.name === name2
      );
    });
  }
  /**
   * Delete multiple files in cache.
   *
   * @param predicate A predicate like `array.filter(item => boolean)`
   */
  deleteMany(predicate) {
    return __async(this, null, function* () {
      const list = yield this.list();
      for (const item of list) {
        if (predicate(item)) {
          yield this.sb.delete(item.name);
          yield this.sb.delete(`${PREFIX_METADATA}${item.name}`);
        }
      }
    });
  }
  /**
   * Write the metadata of the file to disk.
   */
  writeMetadata(name, metadata) {
    return __async(this, null, function* () {
      const blob = new Blob([JSON.stringify(metadata)], { type: "text/plain" });
      yield this.sb.write(`${PREFIX_METADATA}${name}`, blob.stream());
    });
  }
};
var cache_manager_default = CacheManager;
function urlToFileName(url, prefix) {
  return __async(this, null, function* () {
    const hashBuffer = yield crypto.subtle.digest(
      "SHA-1",
      new TextEncoder().encode(url)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return `${prefix}${hashHex}_${url.split("/").pop()}`;
  });
}

// src/model-manager.ts
var DEFAULT_PARALLEL_DOWNLOADS = 3;
var ModelValidationStatus = /* @__PURE__ */ ((ModelValidationStatus2) => {
  ModelValidationStatus2["VALID"] = "valid";
  ModelValidationStatus2["INVALID"] = "invalid";
  ModelValidationStatus2["DELETED"] = "deleted";
  return ModelValidationStatus2;
})(ModelValidationStatus || {});
var Model = class {
  constructor(modelManager, url, mmprojUrl, savedFiles) {
    __publicField(this, "modelManager");
    /**
     * URL to the GGUF file (in case it contains multiple shards, the URL should point to the first shard)
     *
     * This URL will be used to identify the model in the cache. There can't be 2 models with the same URL.
     */
    __publicField(this, "url");
    /**
     * URL to mmproj file, if exists
     */
    __publicField(this, "mmprojUrl");
    /**
     * Size in bytes (total size of all shards).
     *
     * A value of -1 means the model is deleted from the cache. You must call `ModelManager.downloadModel` to re-download the model.
     */
    __publicField(this, "size");
    /**
     * List of all shards in the cache, sorted by original URL (ascending order)
     */
    __publicField(this, "files");
    this.modelManager = modelManager;
    this.url = url;
    this.mmprojUrl = mmprojUrl;
    if (savedFiles) {
      this.files = this.getAllFiles(savedFiles);
      this.size = sumArr(this.files.map((f) => f.metadata.originalSize));
    } else {
      this.files = [];
      this.size = 0;
    }
  }
  /**
   * Open and get a list of all shards as Blobs
   */
  open() {
    return __async(this, null, function* () {
      if (this.size === -1) {
        throw new WllamaError(
          `Model is deleted from the cache; Call ModelManager.downloadModel to re-download the model`,
          "load_error"
        );
      }
      const blobs = [];
      for (const file of this.files) {
        const blob = yield this.modelManager.cacheManager.open(file.name);
        if (!blob) {
          throw new Error(
            `Failed to open file ${file.name}; Hint: the model may be invalid, please refresh it`
          );
        }
        blobs.push(blob);
      }
      return blobs;
    });
  }
  /**
   * Validate the model files.
   *
   * If the model is invalid, the model manager will not be able to use it. You must call `refresh` to re-download the model.
   *
   * Cases that model is invalid:
   * - The model is deleted from the cache
   * - The model files are missing (or the download is interrupted)
   */
  validate() {
    let nbShards = ModelManager.parseModelUrl(this.url).length;
    if (this.mmprojUrl) {
      nbShards += 1;
    }
    if (this.size === -1) {
      return "deleted" /* DELETED */;
    }
    if (this.size < 16 || this.files.length !== nbShards) {
      return "invalid" /* INVALID */;
    }
    for (const file of this.files) {
      if (!file.metadata || file.metadata.originalSize !== file.size) {
        return "invalid" /* INVALID */;
      }
    }
    return "valid" /* VALID */;
  }
  /**
   * In case the model is invalid, call this function to re-download the model
   */
  refresh() {
    return __async(this, arguments, function* (options = {}) {
      var _a;
      const urls = ModelManager.parseModelUrl(this.url);
      if (this.mmprojUrl) {
        urls.push(this.mmprojUrl);
      }
      const works = urls.map((url, index) => ({
        url,
        index
      }));
      this.modelManager.logger.debug("Downloading model files:", urls);
      const nParallel = (_a = this.modelManager.params.parallelDownloads) != null ? _a : DEFAULT_PARALLEL_DOWNLOADS;
      const totalSize = yield this.getTotalDownloadSize(urls);
      const loadedSize = [];
      const worker = () => __async(this, null, function* () {
        while (works.length > 0) {
          const w = works.shift();
          if (!w) break;
          yield this.modelManager.cacheManager.download(w.url, __spreadProps(__spreadValues({}, options), {
            metadataAdditional: {
              originalURL: w.url,
              mmprojURL: this.mmprojUrl
            },
            progressCallback: ({ loaded }) => {
              var _a2;
              loadedSize[w.index] = loaded;
              (_a2 = options.progressCallback) == null ? void 0 : _a2.call(options, {
                loaded: sumArr(loadedSize),
                total: totalSize
              });
            }
          }));
        }
      });
      const promises = [];
      for (let i = 0; i < nParallel; i++) {
        promises.push(worker());
        loadedSize.push(0);
      }
      yield Promise.all(promises);
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      this.size = this.files.reduce((acc, f) => acc + f.metadata.originalSize, 0);
    });
  }
  /**
   * Remove the model from the cache
   */
  remove() {
    return __async(this, null, function* () {
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      yield this.modelManager.cacheManager.deleteMany(
        (f) => !!this.files.find((file) => file.name === f.name)
      );
      this.size = -1;
    });
  }
  getAllFiles(savedFiles) {
    const allUrls = new Set(ModelManager.parseModelUrl(this.url));
    if (this.mmprojUrl) {
      allUrls.add(this.mmprojUrl);
    }
    const allFiles = [];
    for (const url of allUrls) {
      const file = savedFiles.find((f) => f.metadata.originalURL === url);
      if (!file) {
        throw new Error(`Model file not found: ${url}`);
      }
      allFiles.push(file);
    }
    allFiles.sort(
      (a, b) => a.metadata.originalURL.localeCompare(b.metadata.originalURL)
    );
    return allFiles;
  }
  getTotalDownloadSize(urls) {
    return __async(this, null, function* () {
      const responses = yield Promise.all(
        urls.map((url) => fetch(url, { method: "HEAD" }))
      );
      const sizes = responses.map(
        (res) => Number(res.headers.get("content-length") || "0")
      );
      return sumArr(sizes);
    });
  }
};
var ModelManager = class _ModelManager {
  constructor(params = {}) {
    // The CacheManager singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "params");
    __publicField(this, "logger");
    this.cacheManager = params.cacheManager || new cache_manager_default();
    this.params = params;
    this.logger = params.logger || console;
  }
  /**
   * Parses a model URL and returns an array of URLs based on the following patterns:
   * - If the input URL is an array, it returns the array itself.
   * - If the input URL is a string in the `gguf-split` format, it returns an array containing the URL of each shard in ascending order.
   * - Otherwise, it returns an array containing the input URL as a single element array.
   * @param modelUrl URL or list of URLs
   */
  static parseModelUrl(modelUrl) {
    var _a;
    if (Array.isArray(modelUrl)) {
      return modelUrl;
    }
    const urlPartsRegex = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
    const queryMatch = modelUrl.match(/\.gguf(\?.*)?$/);
    const queryParams = (_a = queryMatch == null ? void 0 : queryMatch[1]) != null ? _a : "";
    const matches = modelUrl.match(urlPartsRegex);
    if (!matches) {
      return [modelUrl];
    }
    const baseURL = modelUrl.replace(urlPartsRegex, "");
    const total = matches[2];
    const paddedShardIds = Array.from(
      { length: Number(total) },
      (_, index) => (index + 1).toString().padStart(5, "0")
    );
    return paddedShardIds.map(
      (current) => `${baseURL}-${current}-of-${total}.gguf${queryParams}`
    );
  }
  /**
   * Get all models in the cache
   */
  getModels() {
    return __async(this, arguments, function* (opts = {}) {
      const cachedFiles = yield this.cacheManager.list();
      let models = [];
      for (const file of cachedFiles) {
        const shards = _ModelManager.parseModelUrl(file.metadata.originalURL);
        const mmprojUrl = file.metadata.mmprojURL;
        const isFirstShard = shards.length === 1 || shards[0] === file.metadata.originalURL;
        if (isFirstShard) {
          models.push(
            new Model(this, file.metadata.originalURL, mmprojUrl, cachedFiles)
          );
        }
      }
      if (!opts.includeInvalid) {
        models = models.filter(
          (m) => m.validate() === "valid" /* VALID */
        );
      }
      return models;
    });
  }
  /**
   * Download a model from the given URL.
   *
   * The URL must end with `.gguf`
   */
  downloadModel(_0) {
    return __async(this, arguments, function* (sourceOrURL, options = {}) {
      const source = isString(sourceOrURL) ? { url: sourceOrURL } : sourceOrURL;
      if (!isValidGgufFile(source.url)) {
        throw new WllamaError(
          `Invalid model URL: ${source.url}; URL must ends with ".gguf"`,
          "download_error"
        );
      }
      const model = new Model(this, source.url, source.mmprojUrl);
      const validity = model.validate();
      if (validity !== "valid" /* VALID */) {
        yield model.refresh(options);
      }
      return model;
    });
  }
  /**
   * Get a model from the cache or download it if it's not available.
   */
  getModelOrDownload(_0) {
    return __async(this, arguments, function* (source, options = {}) {
      var _a;
      const models = yield this.getModels();
      const model = models.find((m) => m.url === source.url);
      if (model) {
        (_a = options.progressCallback) == null ? void 0 : _a.call(options, { loaded: model.size, total: model.size });
        return model;
      }
      return this.downloadModel(source, options);
    });
  }
  /**
   * Remove all models from the cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.cacheManager.clear();
    });
  }
};

// src/types/types.ts
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["DEBUG"] = 1] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  return LogLevel2;
})(LogLevel || {});

// src/wasm-from-cdn.ts
var WasmCompatFromCDN = {
  worker: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.5.1/wasm/wllama.js",
  wasm: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.5.1/wasm/wllama.wasm"
};

// src/wllama.ts
var LoggerWithoutDebug = __spreadProps(__spreadValues({}, console), {
  debug: () => {
  }
});
var WllamaError = class extends Error {
  constructor(message, type = "unknown_error") {
    super(message);
    __publicField(this, "type");
    this.type = type;
  }
};
var WllamaAbortError = class extends Error {
  constructor() {
    super("Operation aborted");
    __publicField(this, "name", "AbortError");
  }
};
var WllamaRuntimeError = class extends Error {
  constructor(message, stack) {
    super(message);
    __publicField(this, "name", "RuntimeError");
    __publicField(this, "stack");
    this.stack = stack;
  }
};
var Wllama = class {
  constructor(pathConfig, wllamaConfig = {}) {
    // The CacheManager and ModelManager are singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "modelManager");
    __publicField(this, "compat", null);
    __publicField(this, "proxy", null);
    __publicField(this, "config");
    __publicField(this, "pathConfig");
    __publicField(this, "useMultiThread", false);
    __publicField(this, "nbThreads", 1);
    __publicField(this, "useEmbeddings", false);
    __publicField(this, "useRerank", false);
    // available when loaded
    __publicField(this, "loadedContextInfo", null);
    __publicField(this, "seed");
    __publicField(this, "engramPaths", []);
    __publicField(this, "bosToken", -1);
    __publicField(this, "eosToken", -1);
    __publicField(this, "eotToken", -1);
    __publicField(this, "eogTokens", /* @__PURE__ */ new Set());
    __publicField(this, "addBosToken", false);
    __publicField(this, "addEosToken", false);
    __publicField(this, "mediaMarker");
    __publicField(this, "chatTemplate");
    __publicField(this, "metadata");
    __publicField(this, "hasEncoder", false);
    __publicField(this, "decoderStartToken", -1);
    // note: we overlay instead of using llama-server default_template_kwargs, because we cannot transfer complex data structure via GLUE
    // overlay allow mixed data type or nested structure for kwargs
    __publicField(this, "chatTemplateKwargs", {});
    var _a, _b, _c;
    checkEnvironmentCompatible();
    if (!pathConfig) throw new WllamaError("AssetsPathConfig is required");
    this.pathConfig = pathConfig;
    this.config = wllamaConfig;
    this.cacheManager = (_a = wllamaConfig.cacheManager) != null ? _a : new cache_manager_default();
    this.modelManager = (_c = wllamaConfig.modelManager) != null ? _c : new ModelManager({
      cacheManager: this.cacheManager,
      logger: (_b = wllamaConfig.logger) != null ? _b : console,
      parallelDownloads: wllamaConfig.parallelDownloads,
      allowOffline: wllamaConfig.allowOffline
    });
    this.setCompat("default");
  }
  logger() {
    var _a;
    return (_a = this.config.logger) != null ? _a : console;
  }
  checkModelLoaded() {
    if (!this.isModelLoaded()) {
      throw new WllamaError(
        "loadModel() is not yet called",
        "model_not_loaded"
      );
    }
  }
  /**
   * Get the libllama version string, e.g. "b6327-4d74393".
   *
   * @returns version string embedded at build time.
   */
  static getLibllamaVersion() {
    return LIBLLAMA_VERSION;
  }
  /**
   * Set compatibility options for Wllama.
   * @param compat Set to null to disable compatibility, or 'default' to use the default compat resources from CDN.
   * @param mode 'safari' by default; If set to 'firefox_safari', the compat mode will **also** be enabled on Firefox, which will significantly degrade the performance but allow using WebGPU on Firefox.
   */
  setCompat(compat, mode = "safari") {
    if (mode === "safari") {
      if (isFirefox()) {
        this.compat = null;
        return;
      }
    }
    this.compat = compat === "default" ? WasmCompatFromCDN : compat;
  }
  /**
   * Check if the model is loaded via `loadModel()`
   */
  isModelLoaded() {
    return !!this.proxy && !!this.metadata;
  }
  /**
   * Hot-mount an engram fact cartridge staged via `loadModel({ engrams })`,
   * replacing any currently mounted one, or unmount with `null`. The base
   * model weights are untouched; unmounting provably removes the facts.
   *
   * @param index index into the `engrams` array passed to `loadModel`, or
   *   `null` to unmount
   */
  setEngram(index) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      let path = void 0;
      if (index !== null) {
        path = this.engramPaths[index];
        if (!path) {
          throw new WllamaError(
            `no staged engram at index ${index}`,
            "load_error"
          );
        }
      }
      const result = yield this.proxy.wllamaAction(
        "engram_set",
        { _name: "engr_req", path }
      );
      if (!result.success) {
        throw new WllamaError(result.message, "load_error");
      }
    });
  }
  /**
   * Read the engram confidence signal: L2 norms of the mounted cartridge's
   * injected residual, accumulated per token since the last reset.
   *
   * `trace` holds the most recent positions' per-order norms flattened with
   * `traceStride` floats per position (one norm per n-gram order, then the
   * full-residual norm). A stored key fires the high orders; a base-model
   * guess leaves the memory silent.
   */
  getEngramSignal() {
    return __async(this, arguments, function* (opts = {}) {
      var _a, _b;
      this.checkModelLoaded();
      const result = yield this.proxy.wllamaAction(
        "engram_signal",
        { _name: "engs_req", reset: (_a = opts.reset) != null ? _a : false }
      );
      return {
        mean: result.sig_mean,
        max: result.sig_max,
        count: result.sig_count,
        traceStride: result.trace_stride,
        trace: Array.from((_b = result.trace) != null ? _b : [])
      };
    });
  }
  /**
   * Get token ID associated to BOS (begin of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getBOS() {
    return this.bosToken;
  }
  /**
   * Get token ID associated to EOS (end of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOS() {
    return this.eosToken;
  }
  /**
   * Get token ID associated to EOT (end of turn) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOT() {
    return this.eotToken;
  }
  /**
   * Check if a given token is end-of-generation token (e.g. EOS, EOT, etc.)
   *
   * @param token the token ID to be checked
   * @returns true if the token is EOS, EOT, or any other end-of-generation tokens
   */
  isTokenEOG(token) {
    return token === this.eosToken || token === this.eotToken || this.eogTokens.has(token);
  }
  /**
   * Get token ID associated to token used by decoder, to start generating output sequence(only usable for encoder-decoder architecture). In other words, encoder uses normal BOS and decoder uses this token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getDecoderStartToken() {
    return this.decoderStartToken;
  }
  /**
   * Get model hyper-parameters and metadata
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns ModelMetadata
   */
  getModelMetadata() {
    this.checkModelLoaded();
    return this.metadata;
  }
  /**
   * Check if we're currently using multi-thread build.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isMultithread() {
    this.checkModelLoaded();
    return this.useMultiThread;
  }
  /**
   * Get number of threads used in the current context.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns number of threads
   */
  getNumThreads() {
    this.checkModelLoaded();
    return this.useMultiThread ? this.nbThreads : 1;
  }
  /**
   * Check if the current model uses encoder-decoder architecture
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isEncoderDecoderArchitecture() {
    this.checkModelLoaded();
    return this.hasEncoder;
  }
  /**
   * Must we add BOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if BOS token must be added to the sequence
   */
  mustAddBosToken() {
    this.checkModelLoaded();
    return this.addBosToken;
  }
  /**
   * Must we add EOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if EOS token must be added to the sequence
   */
  mustAddEosToken() {
    this.checkModelLoaded();
    return this.addEosToken;
  }
  /**
   * Get the jinja chat template comes with the model. It only available if the original model (before converting to gguf) has the template in `tokenizer_config.json`
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns the jinja template. null if there is no template in gguf
   */
  getChatTemplate() {
    var _a;
    this.checkModelLoaded();
    return (_a = this.chatTemplate) != null ? _a : null;
  }
  /**
   * Check if WebGPU is supported by the current environment.
   * @returns true if WebGPU is supported
   */
  isSupportWebGPU() {
    return isSupportWebGPU();
  }
  /**
   * Load model from a given URL (or a list of URLs, in case the model is splitted into smaller files)
   * - If the model already been downloaded (via `downloadModel()`), then we will use the cached model
   * - Else, we download the model from internet
   * @param modelSourceOrURL
   * @param params
   */
  loadModelFromUrl(_0) {
    return __async(this, arguments, function* (modelSourceOrURL, params = {}) {
      var _a;
      const source = isString(modelSourceOrURL) ? { url: modelSourceOrURL } : modelSourceOrURL;
      const useCache = (_a = params.useCache) != null ? _a : true;
      const model = useCache ? yield this.modelManager.getModelOrDownload(source, params) : yield this.modelManager.downloadModel(source, params);
      const blobs = yield model.open();
      return yield this.loadModel(blobs, params);
    });
  }
  /**
   * Load model from a given Hugging Face model ID and file path.
   *
   * @param hfOptions
   * @param params
   */
  loadModelFromHF(_0) {
    return __async(this, arguments, function* (hfOptions, params = {}) {
      const source = yield getHFModelSource(hfOptions);
      return yield this.loadModelFromUrl(source, params);
    });
  }
  /**
   * Load model from a given list of Blob.
   *
   * You can pass multiple buffers into the function (in case the model contains multiple shards).
   *
   * @param ggufBlobsOrModel Can be either list of Blobs (in case you use local file), or a Model object (in case you use ModelManager)
   * @param params LoadModelParams
   */
  loadModel(_0) {
    return __async(this, arguments, function* (ggufBlobsOrModel, params = {}) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const blobs = ggufBlobsOrModel instanceof Model ? yield ggufBlobsOrModel.open() : [...ggufBlobsOrModel];
      if (blobs.some((b) => b.size === 0)) {
        throw new WllamaError(
          "Input model (or splits) must be non-empty Blob or File",
          "load_error"
        );
      }
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (this.proxy) {
        throw new WllamaError("Module is already initialized", "load_error");
      }
      const supportMultiThread = yield isSupportMultiThread();
      const hwConccurency = Math.floor((navigator.hardwareConcurrency || 1) / 2);
      const nbThreads = (_a = params.n_threads) != null ? _a : hwConccurency;
      this.nbThreads = nbThreads;
      this.useMultiThread = supportMultiThread && nbThreads > 1;
      const workerResources = this.getWorkerResources();
      this.proxy = new ProxyToWorker(
        workerResources,
        this.useMultiThread ? nbThreads : 0,
        // 0 means disable pthread
        (_b = this.config.suppressNativeLog) != null ? _b : false,
        this.logger()
      );
      let logLevel = (_c = params.log_level) != null ? _c : 2 /* INFO */;
      if (this.config.suppressNativeLog) {
        logLevel = 9999;
      }
      const loraAdapters = (_d = params.lora_adapters) != null ? _d : [];
      const loraBlobs = loraAdapters.map((a) => a.blob).filter((b) => !!b);
      const engramEntries = (_e = params.engrams) != null ? _e : [];
      const engramBlobs = engramEntries.map((e) => e.blob).filter((b) => !!b);
      const modelFiles = yield prepareBlobs(blobs, loraBlobs, engramBlobs);
      let engramBlobIndex = 0;
      this.engramPaths = engramEntries.map((e) => {
        if (e.blob) return `models/${modelFiles.engram[engramBlobIndex++].name}`;
        if (e.path) return e.path;
        throw new WllamaError(
          "engrams entries need either a blob or a path",
          "load_error"
        );
      });
      let loraBlobIndex = 0;
      const loraPaths = loraAdapters.map((a) => {
        if (a.blob) return `models/${modelFiles.lora[loraBlobIndex++].name}`;
        if (a.path) return a.path;
        throw new WllamaError(
          "lora_adapters entries need either a blob or a path",
          "load_error"
        );
      });
      yield this.proxy.moduleInit(modelFiles.all);
      this.logger().debug("Calling wllamaStart...");
      const startResult = yield this.proxy.wllamaStart();
      if (!startResult.success) {
        throw new WllamaError(
          `Error while calling start function, result = ${startResult}`
        );
      }
      this.logger().debug("Loading model...");
      const loadResult = yield this.proxy.wllamaAction("load", {
        _name: "load_req",
        log_level: logLevel,
        // if async read is not supported, use mmap; refer to README-dev.md for more details
        use_mmap: !canUseAsyncFileRead(workerResources.compat),
        use_mlock: false,
        n_gpu_layers: (_f = params.n_gpu_layers) != null ? _f : 99999,
        n_ctx: (_g = params.n_ctx) != null ? _g : 1024,
        n_threads: this.useMultiThread ? nbThreads : 1,
        n_ctx_auto: false,
        // not supported for now
        mmproj_path: modelFiles.mmproj ? `/models/${MMPROJ_FILE_NAME}` : void 0,
        model_paths: modelFiles.llm.map((f) => `models/${f.name}`),
        embeddings: params.embeddings,
        offload_kqv: params.offload_kqv,
        n_batch: params.n_batch,
        pooling_type: params.pooling_type,
        rope_scaling_type: params.rope_scaling_type,
        rope_freq_base: params.rope_freq_base,
        rope_freq_scale: params.rope_freq_scale,
        yarn_ext_factor: params.yarn_ext_factor,
        yarn_attn_factor: params.yarn_attn_factor,
        yarn_beta_fast: params.yarn_beta_fast,
        yarn_beta_slow: params.yarn_beta_slow,
        yarn_orig_ctx: params.yarn_orig_ctx,
        cache_type_k: params.cache_type_k,
        cache_type_v: params.cache_type_v,
        n_parallel: 1,
        // only support single sequence for now
        kv_unified: false,
        // TODO: support kv unified cache
        flash_attn: params.flash_attn,
        swa_full: params.swa_full,
        chat_template: params.chat_template,
        jinja: params.jinja,
        reasoning: params.reasoning,
        image_min_tokens: params.image_min_tokens,
        image_max_tokens: params.image_max_tokens,
        warmup: params.warmup,
        no_kv_offload: params.no_kv_offload,
        mmproj_offload: params.mmproj_offload,
        cont_batching: params.cont_batching,
        n_keep: params.n_keep,
        ctx_shift: params.ctx_shift,
        cache_idle_slots: params.cache_idle_slots,
        n_cache_reuse: params.n_cache_reuse,
        lora_paths: loraAdapters.length ? loraPaths : void 0,
        lora_scales: loraAdapters.length ? loraAdapters.map((a) => {
          var _a2;
          return (_a2 = a.scale) != null ? _a2 : 1;
        }) : void 0,
        lora_init_without_apply: params.lora_init_without_apply,
        spec_draft_model: params.spec_draft_model,
        spec_draft_ngl: params.spec_draft_ngl,
        spec_draft_n_max: params.spec_draft_n_max,
        spec_draft_n_min: params.spec_draft_n_min,
        spec_draft_p_min: params.spec_draft_p_min,
        spec_draft_threads: params.spec_draft_threads,
        spec_draft_threads_batch: params.spec_draft_threads_batch,
        kv_overrides_keys: params.kv_overrides ? Object.keys(params.kv_overrides) : void 0,
        kv_overrides_vals: params.kv_overrides ? Object.values(params.kv_overrides) : void 0,
        reasoning_budget_tokens: params.reasoning_budget_tokens,
        reasoning_budget_message: params.reasoning_budget_message,
        reasoning_format: params.reasoning_format,
        skip_chat_parsing: params.skip_chat_parsing,
        prefill_assistant: params.prefill_assistant
      });
      const loadedCtxInfo = __spreadProps(__spreadValues({}, loadResult), {
        metadata: {}
      });
      for (let i = 0; i < loadResult.metadata_key.length; i++) {
        loadedCtxInfo.metadata[loadResult.metadata_key[i]] = loadResult.metadata_val[i];
      }
      this.seed = params.seed;
      this.bosToken = loadedCtxInfo.token_bos;
      this.eosToken = loadedCtxInfo.token_eos;
      this.eotToken = loadedCtxInfo.token_eot;
      this.useEmbeddings = !!params.embeddings;
      this.useRerank = params.pooling_type == "rank";
      this.metadata = {
        hparams: {
          nVocab: loadedCtxInfo.n_vocab,
          nCtxTrain: loadedCtxInfo.n_ctx_train,
          nEmbd: loadedCtxInfo.n_embd,
          nLayer: loadedCtxInfo.n_layer
        },
        meta: loadedCtxInfo.metadata
      };
      this.hasEncoder = !!loadedCtxInfo.has_encoder;
      this.decoderStartToken = loadedCtxInfo.token_decoder_start;
      this.addBosToken = loadedCtxInfo.add_bos_token;
      this.addEosToken = loadedCtxInfo.add_eos_token;
      this.chatTemplate = loadedCtxInfo.metadata["tokenizer.chat_template"];
      this.loadedContextInfo = loadedCtxInfo;
      this.eogTokens = new Set(loadedCtxInfo.list_tokens_eog);
      this.mediaMarker = loadedCtxInfo.media_marker;
      this.chatTemplateKwargs = (_h = params.default_template_kwargs) != null ? _h : {};
      this.logger().debug({ loadedCtxInfo });
    });
  }
  getLoadedContextInfo() {
    this.checkModelLoaded();
    if (!this.loadedContextInfo) {
      throw new WllamaError("Loaded context info is not available");
    }
    return __spreadValues({}, this.loadedContextInfo);
  }
  //////////////////////////////////////////////
  // High level API
  /**
   * Calculate embedding vector for a given text.
   * By default, BOS and EOS tokens will be added automatically. You can use the "skipBOS" and "skipEOS" option to disable it.
   * @param options OAI-compatible embedding creation options
   * @returns OAI-compatible embedding response
   */
  createEmbedding(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      if (!this.useEmbeddings) {
        throw new WllamaError(
          "Embeddings is not enabled. Please set it via LoadModelParams.embeddings"
        );
      }
      const result = yield this.proxy.wllamaAction(
        "embedding",
        {
          _name: "embd_req",
          data_json: JSON.stringify(options),
          files: []
          // TODO: support file input
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(options, false);
    });
  }
  /**
   * Rerank a list of documents against a query.
   * Requires the model to be loaded with embeddings: true and pooling_type: 'rank'.
   * @param options Reranking options (query, documents, top_n)
   * @returns Reranking response with relevance scores sorted highest first
   */
  createRerank(options) {
    return __async(this, null, function* () {
      var _a, _b;
      this.checkModelLoaded();
      if (!this.useEmbeddings || !this.useRerank) {
        throw new WllamaError(
          "Rerank is not enabled. Please set it via LoadModelParams: embeddings = true and pooling_type = rank"
        );
      }
      const top_n = (_a = options.top_n) != null ? _a : options.documents.length;
      let totalTokens = 0;
      const rawResults = [];
      for (let i = 0; i < options.documents.length; i++) {
        const result = yield this.proxy.wllamaAction("rerank", {
          _name: "rrnk_req",
          data_json: JSON.stringify({
            query: options.query,
            document: options.documents[i]
          })
        });
        if (!result.success) {
          throw new WllamaError(
            "Model failed to start reranking",
            "inference_error"
          );
        }
        const { score, tokens_evaluated } = yield this.getRerankResult();
        totalTokens += tokens_evaluated;
        rawResults.push({ index: i, score });
      }
      rawResults.sort((a, b) => b.score - a.score);
      return {
        model: (_b = this.getModelMetadata().meta["general.name"]) != null ? _b : "",
        object: "list",
        usage: { prompt_tokens: totalTokens, total_tokens: totalTokens },
        results: rawResults.slice(0, top_n).map(({ index, score }) => ({
          index,
          relevance_score: score
        }))
      };
    });
  }
  createChatCompletion(options) {
    return __async(this, null, function* () {
      var _a;
      if (Object.keys(this.chatTemplateKwargs).length > 0) {
        options = __spreadProps(__spreadValues({}, options), {
          chat_template_kwargs: __spreadValues(__spreadValues({}, this.chatTemplateKwargs), (_a = options.chat_template_kwargs) != null ? _a : {})
        });
      }
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  createCompletion(options) {
    return __async(this, null, function* () {
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  /**
   * Private implementation of createCompletion
   */
  createCompletionImpl(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      const isStream = !!options.stream;
      const isChat = !!options.messages;
      const customOpt = {};
      if (this.seed !== void 0) {
        customOpt.seed = this.seed;
      }
      let files = [];
      if (isChat) {
        const tmp = this.prepareMultimodalInput(
          options
        );
        options = tmp.params;
        files = tmp.files;
      }
      const result = yield this.proxy.wllamaAction(
        "completion",
        {
          _name: "cmpl_req",
          is_chat: isChat,
          data_json: JSON.stringify(__spreadValues(__spreadValues({}, options), customOpt)),
          files: files.map((f) => new Uint8Array(f))
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(
        options,
        isStream
      );
    });
  }
  /**
   * Same with `createCompletion`, but returns an async iterator instead.
   * Only called when stream=true and no onData is provided.
   */
  createCompletionGenerator(options) {
    return new Promise((resolve) => {
      const createGenerator = cbToAsyncIter(
        (callback) => {
          this.createCompletionImpl(__spreadProps(__spreadValues({}, options), {
            onData: (chunk) => callback(chunk)
          })).then(() => callback(void 0, true)).catch((err) => callback(void 0, false, err));
        }
      );
      resolve(createGenerator());
    });
  }
  /**
   * Whether the currently loaded model supports a specific input modality (e.g. image or audio).
   * @param modality
   * @returns
   */
  supportInputModality(modality) {
    this.checkModelLoaded();
    if (modality === "image") {
      return !!this.loadedContextInfo.has_image_input;
    } else if (modality === "audio") {
      return !!this.loadedContextInfo.has_audio_input;
    } else {
      throw new WllamaError(
        "Unsupported modality: " + modality,
        "unknown_error"
      );
    }
  }
  /**
   * Unload the model and free all memory.
   *
   * Note: This function will NOT crash if model is not yet loaded
   */
  exit() {
    return __async(this, null, function* () {
      var _a;
      yield (_a = this.proxy) == null ? void 0 : _a.wllamaExit();
      this.proxy = null;
    });
  }
  /**
   * [FOR DEBUGGING ONLY] Run ggml backend ops tests without loading any model.
   *
   * Initializes the wasm runtime, executes `test-backend-ops` with the given args, then shuts down.
   *
   * For more info, please refer to guides/debug.md
   *
   * @param args Arguments forwarded to test-backend-ops (e.g. ["-o", "ADD"])
   * @returns retcode (0 = all tests passed) and success flag
   */
  testBackendOps() {
    return __async(this, arguments, function* (args = []) {
      var _a;
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (!(yield isSupportMultiThread())) {
        throw new WllamaError(
          "Multi-threading is required to run backend ops tests, but it is not supported in the current environment."
        );
      }
      const tmpProxy = new ProxyToWorker(
        this.getWorkerResources(),
        0,
        // single-thread; no model needed
        (_a = this.config.suppressNativeLog) != null ? _a : false,
        this.logger()
      );
      try {
        yield tmpProxy.moduleInit([]);
        const startResult = yield tmpProxy.wllamaStart();
        if (!startResult.success) {
          throw new WllamaError(
            `Error while calling start function, result = ${startResult}`
          );
        }
        const result = yield tmpProxy.wllamaAction(
          "test_backend_ops",
          { _name: "tbop_req", args: ["test-backend-ops", ...args] }
        );
        return { retcode: result.retcode, success: result.success };
      } finally {
        yield tmpProxy.wllamaExit();
      }
    });
  }
  //////////////////////////////////////////////
  // Low level API
  // TODO: add back
  /**
   * get debug info
   */
  _getDebugInfo() {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      return yield this.proxy.wllamaDebug();
    });
  }
  //////////////////////////////////////////////
  // Utils
  jsonDecode(data_json) {
    try {
      return JSON.parse(data_json);
    } catch (e) {
      this.logger().error("Failed to parse JSON:", data_json);
      throw new WllamaError("Failed to parse model output", "inference_error");
    }
  }
  prepareMultimodalInput(params) {
    const msg = params.messages;
    const msgNew = [];
    const files = [];
    for (const m of msg) {
      if (Array.isArray(m.content)) {
        const newContent = [];
        for (const c of m.content) {
          if (c.type === "text") {
            newContent.push(c);
          } else {
            if (!this.mediaMarker) {
              throw new WllamaError(
                "Media marker is undefined",
                "inference_error"
              );
            }
            files.push(c.data);
            newContent.push({
              type: "text",
              text: this.mediaMarker
            });
          }
        }
        msgNew.push(__spreadProps(__spreadValues({}, m), {
          content: newContent
        }));
      } else {
        msgNew.push(m);
      }
    }
    return {
      params: __spreadProps(__spreadValues({}, params), {
        messages: msgNew
      }),
      files
    };
  }
  getRerankResult() {
    return __async(this, null, function* () {
      while (true) {
        const chunk = yield this.proxy.wllamaAction(
          "get_result",
          { _name: "gres_req" }
        );
        const jsonString = chunk.data_json;
        if (jsonString && jsonString.length > 0) {
          if (chunk.is_error) {
            const jsonData = this.jsonDecode(jsonString);
            throw new WllamaError(
              jsonData.message || "Unknown reranking error",
              "inference_error"
            );
          }
          return this.jsonDecode(jsonString);
        }
        if (!chunk.has_more) break;
      }
      throw new WllamaError("No reranking result received", "inference_error");
    });
  }
  getResponse(options, isStream) {
    return __async(this, null, function* () {
      var _a, _b;
      let finalResult = null;
      while (true) {
        if ((_a = options.abortSignal) == null ? void 0 : _a.aborted) {
          throw new WllamaAbortError();
        }
        const result_chunk = yield this.proxy.wllamaAction(
          "get_result",
          {
            _name: "gres_req"
          }
        );
        const jsonString = result_chunk.data_json;
        if (!jsonString || jsonString.length === 0) {
          if (!result_chunk.has_more) {
            break;
          } else {
            continue;
          }
        }
        if (jsonString == "null") {
          continue;
        }
        let jsonData = this.jsonDecode(jsonString);
        finalResult = jsonData;
        if (result_chunk.is_error) {
          this.logger().error("Model returned an error:", jsonData);
          throw new WllamaError(
            jsonData.message || "Unknown inference error",
            "inference_error"
          );
        }
        if (isStream) {
          if (!Array.isArray(jsonData)) {
            jsonData = [jsonData];
          }
          for (const chunk of jsonData) {
            (_b = options.onData) == null ? void 0 : _b.call(options, chunk);
            finalResult = chunk;
          }
        }
        if (!result_chunk.has_more) {
          break;
        }
      }
      return finalResult;
    });
  }
  getWorkerResources() {
    const workerResources = {
      wasmPath: absoluteUrl(this.pathConfig["default"]),
      compat: false
    };
    if (needCompat()) {
      if (!this.compat) {
        this.logger().warn(
          "Not using compat mode" + (isFirefox() ? " (expected on Firefox - WebGPU will be disabled)" : "")
        );
      } else {
        const isUsingDefault = this.compat.worker === WasmCompatFromCDN.worker && this.compat.wasm === WasmCompatFromCDN.wasm;
        if (isUsingDefault) {
          this.logger().warn(
            "Compatibility mode is activated, using resources from CDN. To use local resources, please refer to @wllama/wllama-compat package."
          );
          this.logger().warn(
            "IMPORTANT: Performance will be significantly degraded in compatibility mode."
          );
        }
        workerResources.wasmPath = absoluteUrl(this.compat.wasm);
        workerResources.jsPath = this.compat.worker;
        workerResources.compat = true;
      }
    }
    if (isFirefox()) {
      if (workerResources.compat) {
        this.logger().warn(
          'Using compat mode on Firefox, performance will be significantly degraded; Consider enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      } else if (!isSupportJSPI()) {
        this.logger().warn(
          'WebGPU is disabled on Firefox due to missing JSPI support. Please consider enabling compat mode, or enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      }
    }
    return workerResources;
  }
};
