import {useEffect} from 'react';
import arfxtable from 'arfxtable';
function Table() {
    
    useEffect(() => {
        const myTable = arfxtable({
            target: '#table',
            url: '/data/data.json',
            data: function () {
                return {
                    now: Date.now()
                }
            },
            trData: 0,
            columns: [{
                target: 0,
                className: 'text-center'
            },
            {
                target: 1,
                className: 'text-center'
            },
            {
                target: 2,
                className: 'tiga oke'
            }
            ]
        });
    }, [])

    

    return (
        <div>
            <h4>Table</h4>
            <table id="table" className="arfxtable table table-sm table-bordered" style={{width: '100% !important'}}>
                <thead>
                    <tr>
                        <th rowSpan="2" className="text-center">Nama</th>
                        <th rowSpan="2" className="text-center">Divisi</th>
                        <th colSpan="2" className="text-center">Favorite</th>
                        <th rowSpan="2" className="text-center">Umur</th>
                    </tr>
                    <tr>
                        <th className="text-center">Makanan</th>
                        <th className="text-center">Hobi</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}
export default Table;