import{cM as n,r as p,__tla as P}from"./index-dc75a212.js";let s,S,o,R,E,O,A,N=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{let r;r=n(),E=_=>r.getDictByType(_)||[],S=_=>{const e=[];return E(_).forEach(t=>{e.push({...t,value:parseInt(t.value+"")})}),e},O=_=>{const e=[];return E(_).forEach(t=>{e.push({...t,value:t.value+""})}),e},A=_=>{const e=[];return E(_).forEach(t=>{e.push({...t,value:t.value+""=="true"})}),e},R=(_,e)=>{const t=E(_);for(const T of t)if(T.value===e+"")return T},o=(_,e)=>{const t=E(_),T=p("");return t.forEach(a=>{a.value===e+""&&(T.value=a.label)}),T.value},s=(_=>(_.USER_TYPE="user_type",_.COMMON_STATUS="common_status",_.SYSTEM_TENANT_PACKAGE_ID="system_tenant_package_id",_.TERMINAL="terminal",_.SYSTEM_USER_SEX="system_user_sex",_.SYSTEM_MENU_TYPE="system_menu_type",_.SYSTEM_ROLE_TYPE="system_role_type",_.SYSTEM_DATA_SCOPE="system_data_scope",_.SYSTEM_NOTICE_TYPE="system_notice_type",_.SYSTEM_OPERATE_TYPE="system_operate_type",_.SYSTEM_LOGIN_TYPE="system_login_type",_.SYSTEM_LOGIN_RESULT="system_login_result",_.SYSTEM_SMS_CHANNEL_CODE="system_sms_channel_code",_.SYSTEM_SMS_TEMPLATE_TYPE="system_sms_template_type",_.SYSTEM_SMS_SEND_STATUS="system_sms_send_status",_.SYSTEM_SMS_RECEIVE_STATUS="system_sms_receive_status",_.SYSTEM_ERROR_CODE_TYPE="system_error_code_type",_.SYSTEM_OAUTH2_GRANT_TYPE="system_oauth2_grant_type",_.SYSTEM_MAIL_SEND_STATUS="system_mail_send_status",_.SYSTEM_NOTIFY_TEMPLATE_TYPE="system_notify_template_type",_.SYSTEM_SOCIAL_TYPE="system_social_type",_.INFRA_BOOLEAN_STRING="infra_boolean_string",_.INFRA_JOB_STATUS="infra_job_status",_.INFRA_JOB_LOG_STATUS="infra_job_log_status",_.INFRA_API_ERROR_LOG_PROCESS_STATUS="infra_api_error_log_process_status",_.INFRA_CONFIG_TYPE="infra_config_type",_.INFRA_CODEGEN_TEMPLATE_TYPE="infra_codegen_template_type",_.INFRA_CODEGEN_FRONT_TYPE="infra_codegen_front_type",_.INFRA_CODEGEN_SCENE="infra_codegen_scene",_.INFRA_FILE_STORAGE="infra_file_storage",_.BPM_MODEL_CATEGORY="bpm_model_category",_.BPM_MODEL_FORM_TYPE="bpm_model_form_type",_.BPM_TASK_ASSIGN_RULE_TYPE="bpm_task_assign_rule_type",_.BPM_PROCESS_INSTANCE_STATUS="bpm_process_instance_status",_.BPM_PROCESS_INSTANCE_RESULT="bpm_process_instance_result",_.BPM_TASK_ASSIGN_SCRIPT="bpm_task_assign_script",_.BPM_OA_LEAVE_TYPE="bpm_oa_leave_type",_.PAY_CHANNEL_CODE="pay_channel_code",_.PAY_ORDER_STATUS="pay_order_status",_.PAY_REFUND_STATUS="pay_refund_status",_.PAY_NOTIFY_STATUS="pay_notify_status",_.PAY_NOTIFY_TYPE="pay_notify_type",_.PAY_TRANSFER_STATUS="pay_transfer_status",_.PAY_TRANSFER_TYPE="pay_transfer_type",_.MP_AUTO_REPLY_REQUEST_MATCH="mp_auto_reply_request_match",_.MP_MESSAGE_TYPE="mp_message_type",_.MEMBER_POINT_BIZ_TYPE="member_point_biz_type",_.MEMBER_EXPERIENCE_BIZ_TYPE="member_experience_biz_type",_.PRODUCT_UNIT="product_unit",_.PRODUCT_SPU_STATUS="product_spu_status",_.PROMOTION_TYPE_ENUM="promotion_type_enum",_.EXPRESS_CHARGE_MODE="trade_delivery_express_charge_mode",_.TRADE_AFTER_SALE_STATUS="trade_after_sale_status",_.TRADE_AFTER_SALE_WAY="trade_after_sale_way",_.TRADE_AFTER_SALE_TYPE="trade_after_sale_type",_.TRADE_ORDER_TYPE="trade_order_type",_.TRADE_ORDER_STATUS="trade_order_status",_.TRADE_ORDER_ITEM_AFTER_SALE_STATUS="trade_order_item_after_sale_status",_.TRADE_DELIVERY_TYPE="trade_delivery_type",_.BROKERAGE_ENABLED_CONDITION="brokerage_enabled_condition",_.BROKERAGE_BIND_MODE="brokerage_bind_mode",_.BROKERAGE_BANK_NAME="brokerage_bank_name",_.BROKERAGE_WITHDRAW_TYPE="brokerage_withdraw_type",_.BROKERAGE_RECORD_BIZ_TYPE="brokerage_record_biz_type",_.BROKERAGE_RECORD_STATUS="brokerage_record_status",_.BROKERAGE_WITHDRAW_STATUS="brokerage_withdraw_status",_.PROMOTION_DISCOUNT_TYPE="promotion_discount_type",_.PROMOTION_PRODUCT_SCOPE="promotion_product_scope",_.PROMOTION_COUPON_TEMPLATE_VALIDITY_TYPE="promotion_coupon_template_validity_type",_.PROMOTION_COUPON_STATUS="promotion_coupon_status",_.PROMOTION_COUPON_TAKE_TYPE="promotion_coupon_take_type",_.PROMOTION_ACTIVITY_STATUS="promotion_activity_status",_.PROMOTION_CONDITION_TYPE="promotion_condition_type",_.PROMOTION_BARGAIN_RECORD_STATUS="promotion_bargain_record_status",_.PROMOTION_COMBINATION_RECORD_STATUS="promotion_combination_record_status",_.PROMOTION_BANNER_POSITION="promotion_banner_position",_.CRM_RECEIVABLE_CHECK_STATUS="crm_receivable_check_status",_.CRM_RETURN_TYPE="crm_return_type",_.CRM_CUSTOMER_INDUSTRY="crm_customer_industry",_.CRM_CUSTOMER_LEVEL="crm_customer_level",_.CRM_CUSTOMER_SOURCE="crm_customer_source",_.CRM_PRODUCT_STATUS="crm_product_status",_))(s||{})});export{s as D,N as __tla,S as a,o as b,R as c,E as d,O as e,A as g};