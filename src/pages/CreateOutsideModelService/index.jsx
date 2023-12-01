// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from 'react';

import {
  Page,
  Row,
  Col,
  Space,
  Button,
  Card,
  FormilyForm,
  FormilyInput,
  FormilyRadio,
  FormilySelect,
  Divider,
  Typography,
  UnifiedLink,
  FormilyTextArea,
} from '@tenx-ui/materials';

import { useLocation, matchPath } from '@umijs/max';
import { DataProvider } from 'shared-components';
import qs from 'query-string';
import { getUnifiedHistory } from '@tenx-ui/utils/es/UnifiedLink/index.prod';

import { createAxiosHandler as __$$createAxiosRequestHandler } from '@yunti/lowcode-datasource-axios-handler';

import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';

import utils, { RefsManager } from '../../utils/__utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../__constants';

import './index.css';

class CreateOutsideModelService$$Page extends React.Component {
  get location() {
    return this.props.self?.location;
  }
  get match() {
    return this.props.self?.match;
  }
  get history() {
    return this.props.self?.history;
  }
  get appHelper() {
    return this.props.self?.appHelper;
  }

  _context = this;

  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { axios: __$$createAxiosRequestHandler(utils.getAxiosHanlderConfig?.()) },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  get constants() {
    return __$$constants || {};
  }

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = { createLoading: true };
  }

  $ = refName => {
    return this._refsManager.get(refName);
  };

  $$ = refName => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          id: 'get_chunks',
          type: 'axios',
          isInit: function () {
            return false;
          },
          options: function () {
            return {
              uri: 'https://portal.172.22.96.136.nip.io/kubeagi-apis/minio/get_chunks',
              isCors: true,
              method: 'GET',
              params: {
                md5: 'test',
              },
              headers: {
                Authorization:
                  'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImExNDU0Y2VmNjNmNmM1ZTNhODYxYzY3YmVlZTZkYTgxYjc1ZTExMzQifQ.eyJpc3MiOiJodHRwczovL3BvcnRhbC4xNzIuMjIuOTYuMTM2Lm5pcC5pby9vaWRjIiwic3ViIjoiQ2dWaFpHMXBiaElHYXpoelkzSmsiLCJhdWQiOiJiZmYtY2xpZW50IiwiZXhwIjoxNzAwNzIxOTYzLCJpYXQiOjE3MDA2MzU1NjMsImF0X2hhc2giOiJIbGNhalBBUDVjemNOZlI1UjBIMFl3IiwiY19oYXNoIjoiSXoyOUYtb1FTNGYyQnowX3JtUUVEdyIsImVtYWlsIjoiYWRtaW5AdGVueGNsb3VkLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsic3lzdGVtOm1hc3RlcnMiLCJpYW0udGVueGNsb3VkLmNvbSIsIm9ic2VydmFiaWxpdHkiLCJyZXNvdXJjZS1yZWFkZXIiLCJvYnNldmFiaWxpdHkiXSwibmFtZSI6ImFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJwaG9uZSI6IiIsInVzZXJpZCI6ImFkbWluIn0.t3jrC7A5d1dd8TfSTvYxoKFPAOOFM6YjmOzF_fiPgGJgUVgo575HeNKykAMOvDBRH40jnp-B6Gxg5xgtLQ5DqQSfEQNaTwsUOoMfV2Y6fP7wlV9IaSOcf-ePcQE3nT-CeeqjllucVX1hcb4PDWohh8mCJvUV30MNwnZoRNfXCWSw7JzyJ2CbsGSq1PQuXcsgQfzf_Up-28GJOgY06IZ1Y0IYxiOYPTC89mTI3uK6MvKAEKuDb8_kcfFKtTKqgK-XDOxazhfXDJkF9Mf1EdaKl0rwtMIsI2ULvJJ-3xAaH3QOrhCFQr861ioZfwk3Zm_q9akS8PuuBnN97Ew7-3h0Vg',
              },
              timeout: 5000,
            };
          },
        },
      ],
    };
  }

  componentWillUnmount() {}

  form(name) {
    return this.$(name || 'formily_create')?.formRef?.current?.form;
  }

  handleCancle() {
    this.history?.go(-1);
  }

  getBucketPath() {
    return `dataset/${this.form()?.values?.name}/v1`;
  }

  handleConfirm() {
    this.form()?.submit(async v => {
      this.setState({
        createLoading: true,
      });
      const { name, description, contentType, filed } = v;
      const params = {
        name,
        displayName: name,
        contentType,
        filed,
        description,
        namespace: this.utils.getAuthData()?.project,
      };
      try {
        const res = await this.props.appHelper.utils.bff?.createDataset({
          input: params,
        });
        this.handleCreateVersionedDataset({
          datasetParams: params,
          datasetRes: res,
        });
      } catch (error) {
        this.utils.notification.warnings({
          message: this.i18n('i18n-72kqkgmc'),
          errors: error?.response?.errors,
        });
        this.setState({
          createLoading: false,
        });
      }
    });
  }

  async handleCreateVersionedDataset({ datasetParams, datasetRes }) {
    const params = {
      name: datasetParams.name + '-v1',
      namespace: datasetParams.namespace,
      datasetName: datasetParams.name,
      displayName: datasetParams.name + '-v1',
      // description: String
      version: datasetParams.contentType,
      released: 0,
      // inheritedFrom: String
    };

    try {
      const res = await this.props.appHelper.utils.bff?.createVersionedDataset({
        input: params,
      });
      this.utils.notification.success({
        message: this.i18n('i18n-1sgb2qhp'),
      });
      this.handleCancle();
    } catch (error) {
      this.utils.notification.warnings({
        message: this.i18n('i18n-72kqkgmc'),
        errors: error?.response?.errors,
      });
      this.setState({
        createLoading: false,
      });
    }
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log(this.props);
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <Page>
        <Row wrap={true} __component_name="Row">
          <Col span={24} __component_name="Col">
            <Space align="center" direction="horizontal" __component_name="Space">
              <Button.Back
                name={this.i18n('i18n-wourf2xg') /* 返回 */}
                type="primary"
                title={__$$eval(() =>
                  this.history.query.type === 'edit' ? '编辑外部模型服务' : '新增外部模型服务'
                )}
                __component_name="Button.Back"
              />
            </Space>
          </Col>
          <Col span={24} __component_name="Col">
            <Card
              size="default"
              type="default"
              actions={[]}
              loading={false}
              bordered={false}
              hoverable={false}
              __component_name="Card"
            >
              <FormilyForm
                ref={this._refsManager.linkRef('formily_create')}
                formHelper={{ autoFocus: true }}
                componentProps={{
                  colon: false,
                  layout: 'horizontal',
                  labelCol: 4,
                  labelAlign: 'left',
                  wrapperCol: 20,
                }}
                __component_name="FormilyForm"
              >
                <FormilyInput
                  fieldProps={{
                    name: 'name',
                    title: this.i18n('i18n-g9s3q1i6') /* 模型服务名称 */,
                    required: true,
                    'x-validator': [
                      {
                        id: 'disabled',
                        type: 'disabled',
                        message: this.i18n('i18n-585k83dk') /* 数据集名称由 0 ~ 50 字符组成 */,
                        pattern: '^.{0,50}$',
                        children: '未知',
                      },
                    ],
                  }}
                  componentProps={{
                    'x-component-props': {
                      placeholder: this.i18n('i18n-9qfjn6yy') /* 请输入名称 */,
                    },
                  }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                  __component_name="FormilyInput"
                />
                <FormilyRadio
                  __component_name="FormilyRadio"
                  fieldProps={{
                    name: 'type',
                    title: '模型服务类型',
                    enum: [
                      { label: this.i18n('i18n-itjueia6') /* LLM */, value: 1 },
                      { label: this.i18n('i18n-kqg9mfj9') /* Embedding */, value: 2 },
                    ],
                    'x-validator': [],
                    required: true,
                  }}
                  componentProps={{
                    'x-component-props': {
                      _sdkSwrGetFunc: {},
                      disabled: false,
                      size: 'middle',
                      buttonStyle: 'outline',
                    },
                  }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                />
                <FormilySelect
                  fieldProps={{
                    enum: __$$eval(() => this.utils.getDataSetApplicationScenario(this)),
                    name: 'scene',
                    title: this.i18n('i18n-qw5ig9gm') /* 应用场景 */,
                    default: __$$eval(
                      () => this.utils.getDataSetApplicationScenario(this)?.[0]?.value
                    ),
                    required: true,
                    'x-validator': [],
                    _unsafe_MixedSetter_enum_select: 'ExpressionSetter',
                    _unsafe_MixedSetter_default_select: 'VariableSetter',
                  }}
                  componentProps={{
                    'x-component-props': {
                      disabled: false,
                      allowClear: false,
                      placeholder: this.i18n('i18n-q7wryol4') /* 请选择应用场景 */,
                      _sdkSwrGetFunc: {},
                    },
                  }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                  __component_name="FormilySelect"
                />
                <Divider
                  mode="default"
                  dashed={true}
                  content={[null]}
                  defaultOpen={true}
                  orientation="left"
                  __component_name="Divider"
                  orientationMargin={0}
                >
                  <Typography.Text
                    style={{ fontSize: '14px' }}
                    strong={true}
                    disabled={false}
                    ellipsis={true}
                    __component_name="Typography.Text"
                  >
                    {this.i18n('i18n-0hlfubp3') /* 模型服务配置 */}
                  </Typography.Text>
                </Divider>
                <FormilyInput
                  __component_name="FormilyInput"
                  fieldProps={{
                    name: 'supplier',
                    title: this.i18n('i18n-2bh18kta') /* 模型服务供应商 */,
                    'x-validator': [],
                  }}
                  componentProps={{
                    'x-component-props': {
                      placeholder: this.i18n('i18n-9sbolidp') /* 请输入模型服务供应商 */,
                    },
                  }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                />
                <FormilyInput
                  __component_name="FormilyInput"
                  fieldProps={{
                    name: 'modelAddress',
                    title: this.i18n('i18n-po894cid') /* 模型服务地址 */,
                    'x-validator': [],
                    required: true,
                  }}
                  componentProps={{ 'x-component-props': { placeholder: '请输入模型服务地址' } }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                />
                <FormilyInput
                  __component_name="FormilyInput"
                  fieldProps={{
                    name: 'token',
                    title: this.i18n('i18n-h7h5as79') /* Token */,
                    'x-validator': [],
                    required: true,
                  }}
                  componentProps={{ 'x-component-props': { placeholder: '请输入Token' } }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                  style={{}}
                />
                <Row __component_name="Row" wrap={true} gutter={[0, 0]}>
                  <Col __component_name="Col" span={24}>
                    <Row __component_name="Row" wrap={false}>
                      <Col __component_name="Col" flex="" span={4} />
                      <Col __component_name="Col" flex="auto" style={{ display: 'flex' }}>
                        <UnifiedLink
                          __component_name="UnifiedLink"
                          to="https://alibaba.com"
                          target="_blank"
                        >
                          {this.i18n('i18n-z12hcv6s') /* 测试链接 */}
                        </UnifiedLink>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <FormilyTextArea
                  fieldProps={{
                    name: 'description',
                    title: this.i18n('i18n-45qn5g3j') /* 描述 */,
                    'x-component': 'Input.TextArea',
                    'x-validator': [
                      {
                        id: 'disabled',
                        type: 'disabled',
                        message: this.i18n('i18n-idhz6qcw') /* 版本描述由 0 ~ 200 字符组成 */,
                        pattern: __$$eval(() => this.constants.DESCRIPTION_LENGTH_REG),
                        children: '未知',
                      },
                    ],
                  }}
                  componentProps={{
                    'x-component-props': {
                      placeholder: this.i18n('i18n-wrf069l1') /* 请输入描述 */,
                    },
                  }}
                  decoratorProps={{ 'x-decorator-props': { labelEllipsis: true } }}
                  __component_name="FormilyTextArea"
                />
              </FormilyForm>
              <Divider
                mode="line"
                style={{ width: 'calc(100% + 48px)', marginLeft: '-24px' }}
                dashed={false}
                defaultOpen={false}
                __component_name="Divider"
              />
              <Row wrap={true} __component_name="Row">
                <Col span={4} __component_name="Col" />
                <Col span={20} __component_name="Col">
                  <Space align="center" direction="horizontal" __component_name="Space">
                    <Button
                      block={false}
                      ghost={false}
                      shape="default"
                      danger={false}
                      onClick={function () {
                        return this.handleCancle.apply(
                          this,
                          Array.prototype.slice.call(arguments).concat([])
                        );
                      }.bind(this)}
                      disabled={false}
                      __component_name="Button"
                    >
                      {this.i18n('i18n-tg2scz4v') /* 取消 */}
                    </Button>
                    <Button
                      type="primary"
                      block={false}
                      ghost={false}
                      shape="default"
                      danger={false}
                      onClick={function () {
                        return this.handleConfirm.apply(
                          this,
                          Array.prototype.slice.call(arguments).concat([])
                        );
                      }.bind(this)}
                      disabled={false}
                      __component_name="Button"
                    >
                      {this.i18n('i18n-mq4to9og') /* 确定 */}
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const PageWrapper = (props = {}) => {
  const location = useLocation();
  const history = getUnifiedHistory();
  const match = matchPath({ path: '/model-service/createOutsideModelService' }, location.pathname);
  history.match = match;
  history.query = qs.parse(location.search);
  const appHelper = {
    utils,
    location,
    match,
    history,
  };
  const self = {
    appHelper,
    ...appHelper,
  };
  return (
    <DataProvider
      self={self}
      sdkInitFunc={{
        enabled: undefined,
        func: 'undefined',
        params: undefined,
      }}
      sdkSwrFuncs={[]}
      render={dataProps => (
        <CreateOutsideModelService$$Page
          {...props}
          {...dataProps}
          self={self}
          appHelper={appHelper}
        />
      )}
    />
  );
};
export default PageWrapper;

function __$$eval(expr) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}