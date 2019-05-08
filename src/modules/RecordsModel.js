class RecordsModel {
    constructor(list = []) {
        this._list = list;
    }


    _list = null;
    _latest = null;


    get list() {
        return this._list;
    }


    reset() {
        this._list = [];
        this._latest = null;
    }

    addRecord(label, record = 0) {
        this._latest = {
            label,
            record
        };

        this._list.unshift(this._latest);
    }

    updateLatestRecord(record) {
        if (!this._latest) {
            return;
        }

        this._latest.record = record;
    }
}

export default RecordsModel;
