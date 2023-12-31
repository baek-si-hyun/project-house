function PostComment() {
  return (
    <div className="mb-12">
      <div className="float-left w-3/4 ">
        <div className="p-4 mr-4 bg-gray-100 rounded-xl">
          <div className="flex items-start gap-4 p-4 pb-6 border-b border-gray-300">
            <img
              className="w-10 h-10 rounded-full"
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avatar"
            />{" "}
            <div className="w-full">
              <form className="flex flex-col w-full">
                <div className="pb-2">
                  <label
                    htmlFor="comment"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    className="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    작성
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="p-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((list) => (
              <div key={list} className="flex items-start gap-2 mb-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">
                    baek-si-hyun{" "}
                    <span className="text-xs font-bold text-gray-500">
                      30분전
                    </span>
                  </span>
                  <div className="text-sm">
                    <span>
                      댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col float-right w-1/4 gap-4">
        <div className="flex items-center flex-1 gap-2 p-6 bg-gray-100 rounded-xl">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold">baek-si-hyun</span>
            <span className="text-sm font-bold">2023-06-08</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold">프로젝트 참여인원</span>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((list) => (
              <div key={list} className="flex items-center gap-2">
                <img
                  className="w-6 h-6 rounded-full"
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                  alt="avatar"
                />
                <span className="text-sm font-bold truncate">baek-si-hyun</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold ">제작 프로젝트</span>
          <div className="flex flex-col">
            <span>당근마켓 클론 코딩</span>
            <span>개인웹이트 </span>
            <span>에어이엔비 클론코딩</span>
            <span>토스 클론코딩</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold ">관련 키워드</span>
          <div className="flex flex-wrap gap-1">
            {[1, 2, 3, 4, 5, 6].map((list) => (
              <kbd
                key={list}
                className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100  border border-gray-200 rounded-lg"
              >
                개인 홈페이지
              </kbd>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostComment;
