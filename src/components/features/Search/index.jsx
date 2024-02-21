import { ReactiveBase } from '@appbaseio/reactivesearch';
import {ELASTICSEARCH_URL} from "../../../constants.js";
import Conditions from './Conditions.jsx';
import Result from './Result.jsx';

export default function SearchResource () {
  return (
    <ReactiveBase
      app="jga-*,sra-*,bioproject,biosample"
      url={ELASTICSEARCH_URL}
      theme={{
        colors: {
          titleColor      : '#000000',
          textColor       : '#444950',
          primaryTextColor: '#ffffff',
          primaryColor    : '#ff8c00',
          alertColor      : '#fa383e',
        }
      }}>
      <div className="d-flex gap-3 p-3">
        <div style={{ width: '20rem' }}>
          <Conditions />
        </div>
        <div className="flex-grow-1">
          <Result />
        </div>
      </div>
    </ReactiveBase>
  );
}
