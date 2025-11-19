import LoginButtonWrapper from "@/components/login-button-wrapper";

const page = () => {
  return (
    <div className="w-full max-w-xs">
      {/* 로그인 버튼 */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginButtonWrapper /> {/* 로그인 버튼 추가 */}
        </div>
      </div>
    </div>
  );
};

export default page;
