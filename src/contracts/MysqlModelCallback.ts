import { MysqlError } from "mysql";

export default interface MysqlModelCallback {
    callback: (err: MysqlError | null, result: any) => void
}